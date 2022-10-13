from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetAccountBalanceResponse:
    available_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailableBalance' }})
    on_hold_balance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnHoldBalance' }})
    
