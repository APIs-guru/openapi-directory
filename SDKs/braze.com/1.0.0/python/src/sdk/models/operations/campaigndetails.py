from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CampaignDetailsQueryParams:
    campaign_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'campaign_id', 'style': 'form', 'explode': True }})
    

@dataclass
class CampaignDetailsRequest:
    query_params: CampaignDetailsQueryParams = field()
    

@dataclass
class CampaignDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    
