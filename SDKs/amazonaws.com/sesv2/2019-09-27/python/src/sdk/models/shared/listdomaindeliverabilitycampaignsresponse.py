from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDomainDeliverabilityCampaignsResponse:
    r"""ListDomainDeliverabilityCampaignsResponse
    An array of objects that provide deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard for the domain.
    """
    
    domain_deliverability_campaigns: List[DomainDeliverabilityCampaign] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainDeliverabilityCampaigns') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
