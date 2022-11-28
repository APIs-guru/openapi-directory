from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LifeCycleLastTest:
    r"""LifeCycleLastTest
    Lifecycle last Test.
    """
    
    finalized: Optional[LifeCycleLastTestFinalized] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalized') }})
    initiated: Optional[LifeCycleLastTestInitiated] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('initiated') }})
    reverted: Optional[LifeCycleLastTestReverted] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reverted') }})
    
