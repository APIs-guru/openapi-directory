from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import disputeamount


@dataclass_json
@dataclass
class MonetaryTransaction:
    amount: Optional[disputeamount.DisputeAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
