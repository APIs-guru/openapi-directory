from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CommitTransactionResponse:
    r"""CommitTransactionResponse
    The response elements represent the output of a commit transaction request.
    """
    
    transaction_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    
