from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CommitTransactionRequest:
    r"""CommitTransactionRequest
    Contains the details of the transaction to commit.
    """
    
    commit_digest: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CommitDigest') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransactionId') }})
    
