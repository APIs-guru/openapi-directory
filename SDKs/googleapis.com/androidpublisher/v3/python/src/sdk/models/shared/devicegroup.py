from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceGroup:
    r"""DeviceGroup
    LINT.IfChange A group of devices. A group is defined by a set of device selectors. A device belongs to the group if it matches any selector (logical OR).
    """
    
    device_selectors: Optional[List[DeviceSelector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSelectors') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
