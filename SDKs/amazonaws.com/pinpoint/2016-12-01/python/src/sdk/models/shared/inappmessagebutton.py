from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppMessageButton:
    r"""InAppMessageButton
    Button Config for an in-app message.
    """
    
    android: Optional[OverrideButtonConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Android') }})
    default_config: Optional[DefaultButtonConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultConfig') }})
    ios: Optional[OverrideButtonConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IOS') }})
    web: Optional[OverrideButtonConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Web') }})
    
