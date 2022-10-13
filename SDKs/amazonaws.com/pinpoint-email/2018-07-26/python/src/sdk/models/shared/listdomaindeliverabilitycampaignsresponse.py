from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domaindeliverabilitycampaign


@dataclass_json
@dataclass
class ListDomainDeliverabilityCampaignsResponse:
    domain_deliverability_campaigns: List[domaindeliverabilitycampaign.DomainDeliverabilityCampaign] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainDeliverabilityCampaigns' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
