from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcestatus_enum


@dataclass_json
@dataclass
class APIResourceLinkedResources:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    unified_property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_property' }})
    

@dataclass_json
@dataclass
class APIResource:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    linked_resources: Optional[List[APIResourceLinkedResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linked_resources' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schema: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    status: Optional[resourcestatus_enum.ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
