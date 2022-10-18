from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import currency_enum
from . import linkedcustomer
from . import invoicelineitem
from . import address

class InvoiceStatusStatusEnum(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    AUTHORISED = "authorised"
    PARTIALLY_PAID = "partially_paid"
    PAID = "paid"
    VOID = "void"
    CREDIT = "credit"
    DELETED = "deleted"

class InvoiceTypeInvoiceTypeEnum(str, Enum):
    STANDARD = "standard"
    CREDIT = "credit"
    SERVICE = "service"
    PRODUCT = "product"
    SUPPLIER = "supplier"
    OTHER = "other"


@dataclass_json
@dataclass
class Invoice:
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    billing_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_rate' }})
    customer: Optional[linkedcustomer.LinkedCustomer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    customer_memo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_memo' }})
    deposit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deposit' }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_percentage' }})
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_id' }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invoice_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    invoice_sent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_sent' }})
    line_items: Optional[List[invoicelineitem.InvoiceLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_items' }})
    number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'po_number' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    shipping_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_address' }})
    source_document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_document_url' }})
    status: Optional[InvoiceStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_total' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_code' }})
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_inclusive' }})
    template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template_id' }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax' }})
    type: Optional[InvoiceTypeInvoiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
