from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BillLineItemTypeEnum(str, Enum):
    EXPENSE_ITEM = "expense_item"
    EXPENSE_ACCOUNT = "expense_account"


@dataclass_json
@dataclass
class BillLineItem:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    department_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department_id') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_percentage') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[LinkedInvoiceItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    ledger_account: Optional[LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledger_account') }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_number') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_id') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_amount') }})
    tax_rate: Optional[LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate') }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    type: Optional[BillLineItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_of_measure') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    

@dataclass_json
@dataclass
class BillLineItemInput:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    department_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('department_id') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_percentage') }})
    item: Optional[LinkedInvoiceItemInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    ledger_account: Optional[LinkedLedgerAccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledger_account') }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_number') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_id') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_amount') }})
    tax_rate: Optional[LinkedTaxRateInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate') }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    type: Optional[BillLineItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_of_measure') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    
