from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AbortTransactionResult:
    r"""AbortTransactionResult
    Contains the details of the aborted transaction.
    """
    
    timing_information: Optional[TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    
