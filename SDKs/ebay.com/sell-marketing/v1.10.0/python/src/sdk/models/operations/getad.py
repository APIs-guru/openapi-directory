from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdPathParams:
    ad_id: str = field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAdRequest:
    path_params: GetAdPathParams = field()
    security: GetAdSecurity = field()
    

@dataclass
class GetAdResponse:
    content_type: str = field()
    status_code: int = field()
    ad: Optional[shared.Ad] = field(default=None)
    
