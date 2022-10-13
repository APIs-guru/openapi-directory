from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCampaignPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCampaignRequest:
    path_params: GetCampaignPathParams = field(default=None)
    security: GetCampaignSecurity = field(default=None)
    

@dataclass
class GetCampaignResponse:
    campaign: Optional[shared.Campaign] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
