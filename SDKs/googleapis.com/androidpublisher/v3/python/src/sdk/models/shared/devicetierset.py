from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceTierSet:
    r"""DeviceTierSet
    A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.
    """
    
    device_tiers: Optional[List[DeviceTier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceTiers') }})
    
