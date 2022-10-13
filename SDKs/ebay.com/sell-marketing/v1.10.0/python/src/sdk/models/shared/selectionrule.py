from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import amount
from . import amount


@dataclass_json
@dataclass
class SelectionRule:
    brands: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brands' }})
    category_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryIds' }})
    category_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryScope' }})
    listing_condition_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listingConditionIds' }})
    max_price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPrice' }})
    min_price: Optional[amount.Amount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minPrice' }})
    
