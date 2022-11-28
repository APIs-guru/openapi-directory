from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserMarketplacePurchase:
    r"""UserMarketplacePurchase
    User Marketplace Purchase
    """
    
    account: MarketplaceAccount = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    billing_cycle: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_cycle') }})
    free_trial_ends_on: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('free_trial_ends_on'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_billing_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_billing_date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    on_free_trial: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('on_free_trial') }})
    plan: MarketplaceListingPlan = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    unit_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_count') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
