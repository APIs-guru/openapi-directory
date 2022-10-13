from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaigncriterion
from . import fundingstrategy


@dataclass_json
@dataclass
class CreateCampaignRequest:
    campaign_criterion: Optional[campaigncriterion.CampaignCriterion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignCriterion' }})
    campaign_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignName' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    funding_strategy: Optional[fundingstrategy.FundingStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingStrategy' }})
    marketplace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketplaceId' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    
