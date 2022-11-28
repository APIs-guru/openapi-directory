from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InvoiceCreateItemAPIModel:
    cost: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cost') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    discount_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiscountPercentage') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quantity') }})
    tax_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxId') }})
    tax_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxPercentage') }})
    work_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkTypeId') }})
    
