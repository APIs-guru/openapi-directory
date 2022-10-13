from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InvoiceItem:
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cost' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountAmount' }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountPercentage' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    invoice_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvoiceId' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantity' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxAmount' }})
    tax_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxId' }})
    tax_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxPercentage' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    work_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkTypeId' }})
    
