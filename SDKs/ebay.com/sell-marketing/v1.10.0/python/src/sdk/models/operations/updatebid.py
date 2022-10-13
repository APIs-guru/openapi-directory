from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateBidPathParams:
    ad_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(default=None, metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBidSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateBidRequest:
    path_params: UpdateBidPathParams = field(default=None)
    request: shared.UpdateBidPercentageRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateBidSecurity = field(default=None)
    

@dataclass
class UpdateBidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
