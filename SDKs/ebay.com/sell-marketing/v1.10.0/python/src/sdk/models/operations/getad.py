from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdPathParams:
    ad_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAdRequest:
    path_params: GetAdPathParams = field(default=None)
    security: GetAdSecurity = field(default=None)
    

@dataclass
class GetAdResponse:
    ad: Optional[shared.Ad] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
