from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateCampaignIdentificationPathParams:
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCampaignIdentificationSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateCampaignIdentificationRequest:
    path_params: UpdateCampaignIdentificationPathParams = field(default=None)
    request: shared.UpdateCampaignIdentificationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCampaignIdentificationSecurity = field(default=None)
    

@dataclass
class UpdateCampaignIdentificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
