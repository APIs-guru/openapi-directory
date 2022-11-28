from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InvoiceItemPurchaseDetails:
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_inclusive') }})
    tax_rate: Optional[LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate') }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_of_measure') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    

@dataclass_json
@dataclass
class InvoiceItemSalesDetails:
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_inclusive') }})
    tax_rate: Optional[LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate') }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_of_measure') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    
class InvoiceItemTypeEnum(str, Enum):
    INVENTORY = "inventory"
    SERVICE = "service"
    OTHER = "other"


@dataclass_json
@dataclass
class InvoiceItemPurchaseDetailsInput:
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_inclusive') }})
    tax_rate: Optional[LinkedTaxRateInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate') }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_of_measure') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    

@dataclass_json
@dataclass
class InvoiceItemSalesDetailsInput:
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_inclusive') }})
    tax_rate: Optional[LinkedTaxRateInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tax_rate') }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_of_measure') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    

@dataclass_json
@dataclass
class InvoiceItem:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    asset_account: Optional[LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_account') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expense_account: Optional[LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expense_account') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    income_account: Optional[LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_account') }})
    inventory_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    purchase_details: Optional[InvoiceItemPurchaseDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_details') }})
    purchased: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchased') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    sales_details: Optional[InvoiceItemSalesDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sales_details') }})
    sold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sold') }})
    tracked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracked') }})
    type: Optional[InvoiceItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    

@dataclass_json
@dataclass
class InvoiceItemInput:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    asset_account: Optional[LinkedLedgerAccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_account') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    expense_account: Optional[LinkedLedgerAccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expense_account') }})
    income_account: Optional[LinkedLedgerAccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_account') }})
    inventory_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    purchase_details: Optional[InvoiceItemPurchaseDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchase_details') }})
    purchased: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchased') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('row_version') }})
    sales_details: Optional[InvoiceItemSalesDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sales_details') }})
    sold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sold') }})
    tracked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracked') }})
    type: Optional[InvoiceItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    
