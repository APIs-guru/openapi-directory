from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class ListResourcesForWebACLRequest:
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    web_acl_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLId' }})
    
