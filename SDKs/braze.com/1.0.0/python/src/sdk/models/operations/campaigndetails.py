from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CampaignDetailsQueryParams:
    campaign_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'campaign_id', 'style': 'form', 'explode': True }})
    

@dataclass
class CampaignDetailsRequest:
    query_params: CampaignDetailsQueryParams = field(default=None)
    

@dataclass
class CampaignDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
