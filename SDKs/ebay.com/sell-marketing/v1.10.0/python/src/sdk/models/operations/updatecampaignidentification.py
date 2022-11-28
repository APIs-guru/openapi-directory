from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateCampaignIdentificationPathParams:
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCampaignIdentificationSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateCampaignIdentificationRequest:
    path_params: UpdateCampaignIdentificationPathParams = field()
    request: shared.UpdateCampaignIdentificationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCampaignIdentificationSecurity = field()
    

@dataclass
class UpdateCampaignIdentificationResponse:
    content_type: str = field()
    status_code: int = field()
    
