from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import clientdetailsapimodel
from . import currencydetailsapimodel
from . import invoicerecurringapimodel

class InvoiceDetailsAPIModelStatusEnum(str, Enum):
    DRAFT = "Draft"
    PAID = "Paid"
    UNPAID = "Unpaid"
    OVERDUE = "Overdue"
    VOID = "Void"


@dataclass_json
@dataclass
class InvoiceDetailsAPIModel:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    client: Optional[clientdetailsapimodel.ClientDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Client' }})
    cloned_from_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClonedFromId' }})
    currency: Optional[currencydetailsapimodel.CurrencyDetailsAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountAmount' }})
    duedate: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duedate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enable_partial_payments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnablePartialPayments' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    invoice_category_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvoiceCategoryId' }})
    issued_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IssuedOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Notes' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PoNumber' }})
    recurring_profile: Optional[invoicerecurringapimodel.InvoiceRecurringAPIModel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringProfile' }})
    recurring_profile_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecurringProfileId' }})
    should_send_reminders: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShouldSendReminders' }})
    status: Optional[InvoiceDetailsAPIModelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxAmount' }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Terms' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    
