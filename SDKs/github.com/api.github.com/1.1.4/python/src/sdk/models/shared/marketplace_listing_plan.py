from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MarketplaceListingPlan:
    r"""MarketplaceListingPlan
    Marketplace Listing Plan
    """
    
    accounts_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts_url') }})
    bullets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bullets') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    has_free_trial: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_free_trial') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    monthly_price_in_cents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly_price_in_cents') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    price_model: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_model') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    unit_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_name') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    yearly_price_in_cents: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearly_price_in_cents') }})
    
