from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InvoiceFullDetailsAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    PAID = "Paid"
    UNPAID = "Unpaid"
    OVERDUE = "Overdue"
    VOID = "Void"


@dataclass_json
@dataclass
class InvoiceFullDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    activities: Optional[List[InvoiceActivityAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Activities') }})
    attachments: Optional[List[InvoiceAttachmentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachments') }})
    client: Optional[ClientDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Client') }})
    cloned_from_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClonedFromId') }})
    currency: Optional[CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Currency') }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscountAmount') }})
    duedate: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duedate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enable_partial_payments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnablePartialPayments') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    invoice_category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceCategoryId') }})
    issued_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IssuedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    items: Optional[List[InvoiceItemAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notes') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Number') }})
    payment_gateways: Optional[List[InvoiceGatewayAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentGateways') }})
    payments: Optional[List[InvoicePaymentAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Payments') }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PoNumber') }})
    recurring_profile: Optional[InvoiceRecurringAPIModel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringProfile') }})
    recurring_profile_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecurringProfileId') }})
    should_send_reminders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ShouldSendReminders') }})
    status: Optional[InvoiceFullDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubTotalAmount') }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxAmount') }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Terms') }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalAmount') }})
    
