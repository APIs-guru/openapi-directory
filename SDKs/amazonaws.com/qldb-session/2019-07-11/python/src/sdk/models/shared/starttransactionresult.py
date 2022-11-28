from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartTransactionResult:
    r"""StartTransactionResult
    Contains the details of the started transaction.
    """
    
    timing_information: Optional[TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    
