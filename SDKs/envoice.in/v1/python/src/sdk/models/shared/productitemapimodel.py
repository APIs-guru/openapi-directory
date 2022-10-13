from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProductItemAPIModel:
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cost' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    minimum_quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MinimumQuantity' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceId' }})
    sub_total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubTotalAmount' }})
    tax_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxAmount' }})
    tax_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxId' }})
    tax_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxPercentage' }})
    total_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalAmount' }})
    work_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkTypeId' }})
    
