from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import charity
from . import pricingsummary
from . import product


@dataclass_json
@dataclass
class ItemDraft:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    charity: Optional[charity.Charity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charity' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    pricing_summary: Optional[pricingsummary.PricingSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricingSummary' }})
    product: Optional[product.Product] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product' }})
    
