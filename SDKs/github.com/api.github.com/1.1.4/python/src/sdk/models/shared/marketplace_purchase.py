from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import marketplace_listing_plan
from . import marketplace_listing_plan


@dataclass_json
@dataclass
class MarketplacePurchaseMarketplacePendingChange:
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective_date' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_installed' }})
    plan: Optional[marketplace_listing_plan.MarketplaceListingPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    unit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_count' }})
    

@dataclass_json
@dataclass
class MarketplacePurchaseMarketplacePurchase:
    billing_cycle: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_cycle' }})
    free_trial_ends_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free_trial_ends_on' }})
    is_installed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_installed' }})
    next_billing_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_billing_date' }})
    on_free_trial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'on_free_trial' }})
    plan: Optional[marketplace_listing_plan.MarketplaceListingPlan] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    unit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_count' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    

@dataclass_json
@dataclass
class MarketplacePurchase:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    login: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    marketplace_pending_change: Optional[MarketplacePurchaseMarketplacePendingChange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplace_pending_change' }})
    marketplace_purchase: MarketplacePurchaseMarketplacePurchase = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplace_purchase' }})
    organization_billing_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization_billing_email' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
