from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import linkedinvoiceitem
from . import linkedledgeraccount
from . import linkedtaxrate

class InvoiceLineItemTypeTypeEnum(str, Enum):
    SALES_ITEM = "sales_item"
    DISCOUNT = "discount"
    INFO = "info"
    SUB_TOTAL = "sub_total"


@dataclass_json
@dataclass
class InvoiceLineItem:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_percentage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item: Optional[linkedinvoiceitem.LinkedInvoiceItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    ledger_account: Optional[linkedledgeraccount.LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ledger_account' }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_number' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_id' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_amount' }})
    tax_rate: Optional[linkedtaxrate.LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_rate' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    type: Optional[InvoiceLineItemTypeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_of_measure' }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_price' }})
    
