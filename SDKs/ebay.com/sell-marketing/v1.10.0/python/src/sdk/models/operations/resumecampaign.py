from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ResumeCampaignPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResumeCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ResumeCampaignRequest:
    path_params: ResumeCampaignPathParams = field()
    security: ResumeCampaignSecurity = field()
    

@dataclass
class ResumeCampaignResponse:
    content_type: str = field()
    status_code: int = field()
    
