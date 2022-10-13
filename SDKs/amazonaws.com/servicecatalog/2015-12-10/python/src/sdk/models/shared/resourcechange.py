from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import resourcechangedetail
from . import replacement_enum
from . import resourceattribute_enum


@dataclass_json
@dataclass
class ResourceChange:
    action: Optional[changeaction_enum.ChangeActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    details: Optional[List[resourcechangedetail.ResourceChangeDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    logical_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LogicalResourceId' }})
    physical_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PhysicalResourceId' }})
    replacement: Optional[replacement_enum.ReplacementEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Replacement' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    scope: Optional[List[resourceattribute_enum.ResourceAttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Scope' }})
    
