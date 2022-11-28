from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Blueprint:
    r"""Blueprint
    Describes a blueprint (a virtual private server image).
    """
    
    blueprint_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blueprintId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    license_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('licenseUrl') }})
    min_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPower') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[InstancePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    product_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productUrl') }})
    type: Optional[BlueprintTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    version_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionCode') }})
    
