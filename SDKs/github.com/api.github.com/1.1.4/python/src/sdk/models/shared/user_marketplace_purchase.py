from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from . import marketplace_account
from . import marketplace_listing_plan


@dataclass_json
@dataclass
class UserMarketplacePurchase:
    account: marketplace_account.MarketplaceAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    billing_cycle: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_cycle' }})
    free_trial_ends_on: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'free_trial_ends_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_billing_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_billing_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    on_free_trial: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'on_free_trial' }})
    plan: marketplace_listing_plan.MarketplaceListingPlan = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    unit_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_count' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
