from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MarketplacePurchaseMarketplacePendingChange:
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective_date') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_installed') }})
    plan: Optional[MarketplaceListingPlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    unit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_count') }})
    

@dataclass_json
@dataclass
class MarketplacePurchaseMarketplacePurchase:
    billing_cycle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_cycle') }})
    free_trial_ends_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('free_trial_ends_on') }})
    is_installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_installed') }})
    next_billing_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_billing_date') }})
    on_free_trial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_free_trial') }})
    plan: Optional[MarketplaceListingPlan] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    unit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_count') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    

@dataclass_json
@dataclass
class MarketplacePurchase:
    r"""MarketplacePurchase
    Marketplace Purchase
    """
    
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    login: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    marketplace_purchase: MarketplacePurchaseMarketplacePurchase = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplace_purchase') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    marketplace_pending_change: Optional[MarketplacePurchaseMarketplacePendingChange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplace_pending_change') }})
    organization_billing_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_billing_email') }})
    
