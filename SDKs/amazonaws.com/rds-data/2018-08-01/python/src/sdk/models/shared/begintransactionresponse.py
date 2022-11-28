from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BeginTransactionResponse:
    r"""BeginTransactionResponse
    The response elements represent the output of a request to start a SQL transaction.
    """
    
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
