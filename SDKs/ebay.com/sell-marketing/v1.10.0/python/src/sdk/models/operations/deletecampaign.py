from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteCampaignPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCampaignSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteCampaignRequest:
    path_params: DeleteCampaignPathParams = field()
    security: DeleteCampaignSecurity = field()
    

@dataclass
class DeleteCampaignResponse:
    content_type: str = field()
    status_code: int = field()
    
