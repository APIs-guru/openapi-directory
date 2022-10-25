from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import currency_enum
from . import linkedledgeraccount
from . import billlineitem
from . import linkedsupplier

class BillStatusEnum(str, Enum):
    DRAFT = "draft"
    SUBMITTED = "submitted"
    AUTHORISED = "authorised"
    PARTIALLY_PAID = "partially_paid"
    PAID = "paid"
    VOID = "void"
    CREDIT = "credit"
    DELETED = "deleted"


@dataclass_json
@dataclass
class Bill:
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    bill_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bill_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_rate' }})
    deposit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deposit' }})
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_id' }})
    due_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'due_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ledger_account: Optional[linkedledgeraccount.LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ledger_account' }})
    line_items: Optional[List[billlineitem.BillLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_items' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    paid_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paid_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'po_number' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    status: Optional[BillStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sub_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_total' }})
    supplier: Optional[linkedsupplier.LinkedSupplier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplier' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_code' }})
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_inclusive' }})
    terms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
