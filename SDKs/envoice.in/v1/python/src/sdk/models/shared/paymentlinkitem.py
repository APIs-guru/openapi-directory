from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tax
from . import worktype


@dataclass_json
@dataclass
class PaymentLinkItem:
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cost' }})
    discount_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountAmount' }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiscountPercentage' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    payment_link_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentLinkId' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Quantity' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    tax: Optional[tax.Tax] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tax' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxAmount' }})
    tax_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxId' }})
    tax_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxPercentage' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    work_type: Optional[worktype.WorkType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkType' }})
    work_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkTypeId' }})
    
