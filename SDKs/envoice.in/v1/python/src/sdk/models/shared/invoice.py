from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import activity
from . import invoiceattachment
from . import invoiceitem
from . import paymentgatewayforinvoice
from . import payment

class InvoiceStatusEnum(str, Enum):
    DRAFT = "Draft"
    PAID = "Paid"
    UNPAID = "Unpaid"
    OVERDUE = "Overdue"
    VOID = "Void"


@dataclass_json
@dataclass
class Invoice:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    activities: Optional[List[activity.Activity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Activities' }})
    attachments: Optional[List[invoiceattachment.InvoiceAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachments' }})
    client_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientId' }})
    cloned_from_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClonedFromId' }})
    currency_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrencyId' }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountAmount' }})
    duedate: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duedate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enable_partial_payments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnablePartialPayments' }})
    estimation_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EstimationId' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    invoice_category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvoiceCategoryId' }})
    issued_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    items: Optional[List[invoiceitem.InvoiceItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    order_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderId' }})
    payment_gateways: Optional[List[paymentgatewayforinvoice.PaymentGatewayForInvoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentGateways' }})
    payment_link_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentLinkId' }})
    payments: Optional[List[payment.Payment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Payments' }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PoNumber' }})
    recurring_profile_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringProfileId' }})
    should_send_reminders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShouldSendReminders' }})
    status: Optional[InvoiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxAmount' }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Terms' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
