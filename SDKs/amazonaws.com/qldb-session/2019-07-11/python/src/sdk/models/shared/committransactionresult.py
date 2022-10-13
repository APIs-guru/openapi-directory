from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iousage
from . import timinginformation


@dataclass_json
@dataclass
class CommitTransactionResult:
    commit_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommitDigest' }})
    consumed_i_os: Optional[iousage.IoUsage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumedIOs' }})
    timing_information: Optional[timinginformation.TimingInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimingInformation' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionId' }})
    
