from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount


@dataclass_json
@dataclass
class Fee:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    fee_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeMemo' }})
    fee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeType' }})
    
