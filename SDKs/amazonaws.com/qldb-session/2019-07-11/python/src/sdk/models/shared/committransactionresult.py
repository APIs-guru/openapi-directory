from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommitTransactionResult:
    r"""CommitTransactionResult
    Contains the details of the committed transaction.
    """
    
    commit_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitDigest') }})
    consumed_i_os: Optional[IoUsage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedIOs') }})
    timing_information: Optional[TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimingInformation') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    
