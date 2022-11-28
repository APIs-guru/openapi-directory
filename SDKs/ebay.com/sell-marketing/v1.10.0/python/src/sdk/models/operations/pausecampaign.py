from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PauseCampaignPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PauseCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PauseCampaignRequest:
    path_params: PauseCampaignPathParams = field()
    security: PauseCampaignSecurity = field()
    

@dataclass
class PauseCampaignResponse:
    content_type: str = field()
    status_code: int = field()
    
