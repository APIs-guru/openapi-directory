from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CampaignAnalyticsQueryParams:
    campaign_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'campaign_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    

@dataclass
class CampaignAnalyticsRequest:
    query_params: CampaignAnalyticsQueryParams = field()
    

@dataclass
class CampaignAnalyticsResponse:
    content_type: str = field()
    status_code: int = field()
    
