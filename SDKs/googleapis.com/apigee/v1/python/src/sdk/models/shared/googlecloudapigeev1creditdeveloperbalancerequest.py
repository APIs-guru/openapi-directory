from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CreditDeveloperBalanceRequest:
    r"""GoogleCloudApigeeV1CreditDeveloperBalanceRequest
    Request for CreditDeveloperBalance.
    """
    
    transaction_amount: Optional[GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionAmount') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    
