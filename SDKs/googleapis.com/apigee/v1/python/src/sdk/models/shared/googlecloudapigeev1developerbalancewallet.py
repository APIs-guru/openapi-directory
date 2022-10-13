from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypemoney


@dataclass_json
@dataclass
class GoogleCloudApigeeV1DeveloperBalanceWallet:
    balance: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    last_credit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastCreditTime' }})
    
