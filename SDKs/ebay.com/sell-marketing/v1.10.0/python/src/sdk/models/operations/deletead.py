from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteAdPathParams:
    ad_id: str = field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteAdRequest:
    path_params: DeleteAdPathParams = field()
    security: DeleteAdSecurity = field()
    

@dataclass
class DeleteAdResponse:
    content_type: str = field()
    status_code: int = field()
    
