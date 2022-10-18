from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import linkedledgeraccount
from . import linkedledgeraccount
from . import linkedledgeraccount
from . import linkedtaxrate
from . import linkedtaxrate


@dataclass_json
@dataclass
class InvoiceItemPurchaseDetails:
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_inclusive' }})
    tax_rate: Optional[linkedtaxrate.LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_rate' }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_of_measure' }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_price' }})
    

@dataclass_json
@dataclass
class InvoiceItemSalesDetails:
    tax_inclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_inclusive' }})
    tax_rate: Optional[linkedtaxrate.LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_rate' }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_of_measure' }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_price' }})
    
class InvoiceItemTypeTypeEnum(str, Enum):
    INVENTORY = "inventory"
    SERVICE = "service"
    OTHER = "other"


@dataclass_json
@dataclass
class InvoiceItem:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    asset_account: Optional[linkedledgeraccount.LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_account' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expense_account: Optional[linkedledgeraccount.LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expense_account' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    income_account: Optional[linkedledgeraccount.LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'income_account' }})
    inventory_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    purchase_details: Optional[InvoiceItemPurchaseDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_details' }})
    purchased: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchased' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    sales_details: Optional[InvoiceItemSalesDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sales_details' }})
    sold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sold' }})
    tracked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracked' }})
    type: Optional[InvoiceItemTypeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_price' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
