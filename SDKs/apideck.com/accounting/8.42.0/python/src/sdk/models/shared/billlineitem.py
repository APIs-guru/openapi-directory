from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class BillLineItemTypeTypeEnum(str, Enum):
    EXPENSE_ITEM = "expense_item"
    EXPENSE_ACCOUNT = "expense_account"


@dataclass_json
@dataclass
class BillLineItem:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_percentage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item: Optional[shared.LinkedInvoiceItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    ledger_account: Optional[shared.LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ledger_account' }})
    line_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_number' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    row_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_id' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_amount' }})
    tax_rate: Optional[shared.LinkedTaxRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_rate' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    type: Optional[BillLineItemTypeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit_of_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_of_measure' }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_price' }})
    
