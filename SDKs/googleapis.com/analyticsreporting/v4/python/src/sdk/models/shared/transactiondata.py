from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TransactionData:
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    transaction_revenue: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionRevenue' }})
    transaction_shipping: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionShipping' }})
    transaction_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionTax' }})
    
