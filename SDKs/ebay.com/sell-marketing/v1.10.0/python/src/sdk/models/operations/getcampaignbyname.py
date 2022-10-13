from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCampaignByNameQueryParams:
    campaign_name: str = field(default=None, metadata={'query_param': { 'field_name': 'campaign_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCampaignByNameSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCampaignByNameRequest:
    query_params: GetCampaignByNameQueryParams = field(default=None)
    security: GetCampaignByNameSecurity = field(default=None)
    

@dataclass
class GetCampaignByNameResponse:
    campaign: Optional[shared.Campaign] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
