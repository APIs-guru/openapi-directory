from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Target:
    r"""Target
    The contact or contact channel that's being engaged.
    """
    
    channel_target_info: Optional[ChannelTargetInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChannelTargetInfo') }})
    contact_target_info: Optional[ContactTargetInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactTargetInfo') }})
    
