from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import buyer
from . import orderlineitem
from . import reference
from . import amount
from . import amount


@dataclass_json
@dataclass
class Transaction:
    amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingEntry' }})
    buyer: Optional[buyer.Buyer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer' }})
    fee_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feeType' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    order_line_items: Optional[List[orderlineitem.OrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderLineItems' }})
    payments_entity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsEntity' }})
    payout_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payoutId' }})
    references: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'references' }})
    sales_record_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salesRecordReference' }})
    total_fee_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFeeAmount' }})
    total_fee_basis_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalFeeBasisAmount' }})
    transaction_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionDate' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    transaction_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionMemo' }})
    transaction_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    transaction_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionType' }})
    
