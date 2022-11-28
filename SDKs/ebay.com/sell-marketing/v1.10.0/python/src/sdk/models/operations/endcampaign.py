from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class EndCampaignPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndCampaignRequest:
    path_params: EndCampaignPathParams = field()
    security: EndCampaignSecurity = field()
    

@dataclass
class EndCampaignResponse:
    content_type: str = field()
    status_code: int = field()
    
