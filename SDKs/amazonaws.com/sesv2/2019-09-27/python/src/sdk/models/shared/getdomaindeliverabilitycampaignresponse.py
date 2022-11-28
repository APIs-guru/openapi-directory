from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDomainDeliverabilityCampaignResponse:
    r"""GetDomainDeliverabilityCampaignResponse
    An object that contains all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for.
    """
    
    domain_deliverability_campaign: DomainDeliverabilityCampaign = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DomainDeliverabilityCampaign') }})
    
