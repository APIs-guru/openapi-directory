from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MarketplaceLabel:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    create_time_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTimeMs') }})
    deprecated_marketplace_deal_party: Optional[MarketplaceDealParty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecatedMarketplaceDealParty') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
