from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcetype_enum


@dataclass_json
@dataclass
class ResourceInventory:
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlatformVersion' }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceArn' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    resource_owning_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceOwningAccountId' }})
    resource_type: Optional[resourcetype_enum.ResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    
