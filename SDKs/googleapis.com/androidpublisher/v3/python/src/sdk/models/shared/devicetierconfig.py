from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceTierConfigInput:
    r"""DeviceTierConfigInput
    LINT.IfChange Configuration describing device targeting criteria for the content of an app.
    """
    
    device_groups: Optional[List[DeviceGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceGroups') }})
    device_tier_set: Optional[DeviceTierSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTierSet') }})
    

@dataclass_json
@dataclass
class DeviceTierConfig:
    r"""DeviceTierConfig
    LINT.IfChange Configuration describing device targeting criteria for the content of an app.
    """
    
    device_groups: Optional[List[DeviceGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceGroups') }})
    device_tier_config_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTierConfigId') }})
    device_tier_set: Optional[DeviceTierSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTierSet') }})
    
