from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CommitTransactionResponse:
    transaction_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    
