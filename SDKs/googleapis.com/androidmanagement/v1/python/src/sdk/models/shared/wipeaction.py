from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WipeAction:
    r"""WipeAction
    An action to reset a company owned device or delete a work profile. Note: blockAction must also be specified.
    """
    
    preserve_frp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preserveFrp') }})
    wipe_after_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wipeAfterDays') }})
    
