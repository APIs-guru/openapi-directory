from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommitTransactionRequest:
    commit_digest: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CommitDigest' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionId' }})
    
