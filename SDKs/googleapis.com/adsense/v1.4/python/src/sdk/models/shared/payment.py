from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Payment:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    payment_amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentAmount' }})
    payment_amount_currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentAmountCurrencyCode' }})
    payment_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentDate' }})
    
