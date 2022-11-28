from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreditNoteCreditNoteStatusEnum(str, Enum):
    DRAFT = "draft"
    AUTHORISED = "authorised"
    PAID = "paid"
    VOIDED = "voided"
    DELETED = "deleted"

class CreditNoteCreditNoteTypeEnum(str, Enum):
    ACCOUNTS_RECEIVABLE_CREDIT = "accounts_receivable_credit"
    ACCOUNTS_PAYABLE_CREDIT = "accounts_payable_credit"


@dataclass_json
@dataclass
class CreditNoteInput:
    total_amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    account: Optional[LinkedLedgerAccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    allocations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocations') }})
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_rate') }})
    customer: Optional[LinkedCustomerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    date_issued: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_issued'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_paid: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_paid'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    line_items: Optional[List[InvoiceLineItemInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_items') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    remaining_credit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining_credit') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    status: Optional[CreditNoteCreditNoteStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_total') }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_code') }})
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_inclusive') }})
    total_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    type: Optional[CreditNoteCreditNoteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class CreditNote:
    total_amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    account: Optional[LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    allocations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocations') }})
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_rate') }})
    customer: Optional[LinkedCustomer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    date_issued: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_issued'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_paid: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_paid'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    line_items: Optional[List[InvoiceLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_items') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    remaining_credit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remaining_credit') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    status: Optional[CreditNoteCreditNoteStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_total') }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_code') }})
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_inclusive') }})
    total_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    type: Optional[CreditNoteCreditNoteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    
