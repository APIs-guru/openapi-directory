from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypemoney


@dataclass_json
@dataclass
class GoogleCloudApigeeV1CreditDeveloperBalanceRequest:
    transaction_amount: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionAmount' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    
