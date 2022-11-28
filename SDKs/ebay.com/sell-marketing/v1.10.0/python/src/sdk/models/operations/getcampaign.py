from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCampaignPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCampaignRequest:
    path_params: GetCampaignPathParams = field()
    security: GetCampaignSecurity = field()
    

@dataclass
class GetCampaignResponse:
    content_type: str = field()
    status_code: int = field()
    campaign: Optional[shared.Campaign] = field(default=None)
    
