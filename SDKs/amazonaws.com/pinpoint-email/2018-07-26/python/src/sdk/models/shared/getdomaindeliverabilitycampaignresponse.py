from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import domaindeliverabilitycampaign


@dataclass_json
@dataclass
class GetDomainDeliverabilityCampaignResponse:
    domain_deliverability_campaign: domaindeliverabilitycampaign.DomainDeliverabilityCampaign = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainDeliverabilityCampaign' }})
    
