from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InvoiceStatusEnum(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    AUTHORISED = "authorised"
    PARTIALLY_PAID = "partially_paid"
    PAID = "paid"
    VOID = "void"
    CREDIT = "credit"
    DELETED = "deleted"

class InvoiceInvoiceTypeEnum(str, Enum):
    STANDARD = "standard"
    CREDIT = "credit"
    SERVICE = "service"
    PRODUCT = "product"
    SUPPLIER = "supplier"
    OTHER = "other"


@dataclass_json
@dataclass
class Invoice:
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    billing_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_rate') }})
    customer: Optional[LinkedCustomer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    customer_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_memo') }})
    deposit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit') }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_percentage') }})
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downstream_id') }})
    due_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_sent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_sent') }})
    line_items: Optional[List[InvoiceLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_items') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('po_number') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    shipping_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_address') }})
    source_document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_document_url') }})
    status: Optional[InvoiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_total') }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_code') }})
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_inclusive') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_id') }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    type: Optional[InvoiceInvoiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    

@dataclass_json
@dataclass
class InvoiceInput:
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    billing_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency_rate') }})
    customer: Optional[LinkedCustomerInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    customer_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_memo') }})
    deposit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deposit') }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_percentage') }})
    due_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('due_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_sent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_sent') }})
    line_items: Optional[List[InvoiceLineItemInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_items') }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('po_number') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    shipping_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_address') }})
    source_document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_document_url') }})
    status: Optional[InvoiceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_total') }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_code') }})
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_inclusive') }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template_id') }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('terms') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    type: Optional[InvoiceInvoiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
