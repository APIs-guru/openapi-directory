from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountBidderLocation:
    maximum_qps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumQps') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class Account:
    r"""Account
    Configuration data for an Ad Exchange buyer account.
    """
    
    bidder_location: Optional[List[AccountBidderLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidderLocation') }})
    cookie_matching_nid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieMatchingNid') }})
    cookie_matching_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cookieMatchingUrl') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    maximum_active_creatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumActiveCreatives') }})
    maximum_total_qps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumTotalQps') }})
    number_active_creatives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberActiveCreatives') }})
    
