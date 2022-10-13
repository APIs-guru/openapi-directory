from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreditNoteStatusCreditNoteStatusEnum(str, Enum):
    DRAFT = "draft"
    AUTHORISED = "authorised"
    PAID = "paid"
    VOIDED = "voided"
    DELETED = "deleted"

class CreditNoteTypeCreditNoteTypeEnum(str, Enum):
    ACCOUNTS_RECEIVABLE_CREDIT = "accounts_receivable_credit"
    ACCOUNTS_PAYABLE_CREDIT = "accounts_payable_credit"


@dataclass_json
@dataclass
class CreditNote:
    allocations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocations' }})
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_rate' }})
    customer: Optional[shared.LinkedCustomer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    date_issued: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_issued', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_paid: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_paid', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    line_items: Optional[List[shared.InvoiceLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_items' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    remaining_credit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remaining_credit' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    status: Optional[CreditNoteStatusCreditNoteStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_total' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_code' }})
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_inclusive' }})
    total_amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    total_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax' }})
    type: Optional[CreditNoteTypeCreditNoteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
