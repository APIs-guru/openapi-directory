from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicyEnforcementRule:
    r"""PolicyEnforcementRule
    A rule that defines the actions to take if a device or work profile is not compliant with the policy specified in settingName.
    """
    
    block_action: Optional[BlockAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockAction') }})
    setting_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingName') }})
    wipe_action: Optional[WipeAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wipeAction') }})
    
