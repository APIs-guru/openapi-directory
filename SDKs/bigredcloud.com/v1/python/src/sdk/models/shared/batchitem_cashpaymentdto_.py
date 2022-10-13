from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cashpaymentdto


@dataclass_json
@dataclass
class BatchItemCashPaymentDto:
    item: Optional[cashpaymentdto.CashPaymentDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    op_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opCode' }})
    
