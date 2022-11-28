from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCampaignByNameQueryParams:
    campaign_name: str = field(metadata={'query_param': { 'field_name': 'campaign_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCampaignByNameSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCampaignByNameRequest:
    query_params: GetCampaignByNameQueryParams = field()
    security: GetCampaignByNameSecurity = field()
    

@dataclass
class GetCampaignByNameResponse:
    content_type: str = field()
    status_code: int = field()
    campaign: Optional[shared.Campaign] = field(default=None)
    
