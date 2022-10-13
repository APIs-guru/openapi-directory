from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcestatus_enum
from . import apistatus_enum


@dataclass_json
@dataclass
class APIResources:
    excluded_from_coverage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excluded_from_coverage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[resourcestatus_enum.ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
class APITypeEnum(str, Enum):
    PLATFORM = "platform"
    UNIFIED = "unified"


@dataclass_json
@dataclass
class API:
    api_reference_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_reference_url' }})
    categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    postman_collection_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postman_collection_id' }})
    resources: Optional[List[APIResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    spec_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec_url' }})
    status: Optional[apistatus_enum.APIStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[APITypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
