from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount
from . import amount


@dataclass_json
@dataclass
class TransactionSummaryResponse:
    adjustment_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustmentAmount' }})
    adjustment_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustmentBookingEntry' }})
    adjustment_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustmentCount' }})
    balance_transfer_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceTransferAmount' }})
    balance_transfer_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceTransferBookingEntry' }})
    balance_transfer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balanceTransferCount' }})
    credit_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditAmount' }})
    credit_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditBookingEntry' }})
    credit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditCount' }})
    dispute_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disputeAmount' }})
    dispute_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disputeBookingEntry' }})
    dispute_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disputeCount' }})
    non_sale_charge_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonSaleChargeAmount' }})
    non_sale_charge_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonSaleChargeBookingEntry' }})
    non_sale_charge_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonSaleChargeCount' }})
    on_hold_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onHoldAmount' }})
    on_hold_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onHoldBookingEntry' }})
    on_hold_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onHoldCount' }})
    refund_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundAmount' }})
    refund_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundBookingEntry' }})
    refund_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundCount' }})
    shipping_label_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingLabelAmount' }})
    shipping_label_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingLabelBookingEntry' }})
    shipping_label_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingLabelCount' }})
    transfer_amount: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferAmount' }})
    transfer_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferBookingEntry' }})
    transfer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferCount' }})
    
