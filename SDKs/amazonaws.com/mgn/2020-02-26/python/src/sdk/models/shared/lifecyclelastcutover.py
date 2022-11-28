from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LifeCycleLastCutover:
    r"""LifeCycleLastCutover
    Lifecycle last Cutover .
    """
    
    finalized: Optional[LifeCycleLastCutoverFinalized] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalized') }})
    initiated: Optional[LifeCycleLastCutoverInitiated] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiated') }})
    reverted: Optional[LifeCycleLastCutoverReverted] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverted') }})
    
