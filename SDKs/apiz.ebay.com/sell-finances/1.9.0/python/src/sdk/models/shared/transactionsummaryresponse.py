from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactionSummaryResponse:
    r"""TransactionSummaryResponse
    This type is the base response type of the getTransactionSummary method, and based on the filters that are used in the getTransactionSummary call URI, the response may include total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds.
    """
    
    adjustment_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustmentAmount') }})
    adjustment_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustmentBookingEntry') }})
    adjustment_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustmentCount') }})
    balance_transfer_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceTransferAmount') }})
    balance_transfer_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceTransferBookingEntry') }})
    balance_transfer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balanceTransferCount') }})
    credit_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditAmount') }})
    credit_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditBookingEntry') }})
    credit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creditCount') }})
    dispute_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disputeAmount') }})
    dispute_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disputeBookingEntry') }})
    dispute_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disputeCount') }})
    non_sale_charge_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonSaleChargeAmount') }})
    non_sale_charge_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonSaleChargeBookingEntry') }})
    non_sale_charge_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonSaleChargeCount') }})
    on_hold_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onHoldAmount') }})
    on_hold_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onHoldBookingEntry') }})
    on_hold_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onHoldCount') }})
    refund_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundAmount') }})
    refund_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundBookingEntry') }})
    refund_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundCount') }})
    shipping_label_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingLabelAmount') }})
    shipping_label_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingLabelBookingEntry') }})
    shipping_label_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingLabelCount') }})
    transfer_amount: Optional[Amount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferAmount') }})
    transfer_booking_entry: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferBookingEntry') }})
    transfer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferCount') }})
    
