from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MarketplaceListingPlan:
    accounts_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts_url' }})
    bullets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bullets' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    has_free_trial: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_free_trial' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    monthly_price_in_cents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly_price_in_cents' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    price_model: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_model' }})
    state: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    unit_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_name' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    yearly_price_in_cents: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yearly_price_in_cents' }})
    
