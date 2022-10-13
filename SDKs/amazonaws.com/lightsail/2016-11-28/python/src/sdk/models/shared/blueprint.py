from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instanceplatform_enum
from . import blueprinttype_enum


@dataclass_json
@dataclass
class Blueprint:
    blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blueprintId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    license_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'licenseUrl' }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minPower' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform: Optional[instanceplatform_enum.InstancePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    product_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productUrl' }})
    type: Optional[blueprinttype_enum.BlueprintTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionCode' }})
    
