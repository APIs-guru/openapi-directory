from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateBidPathParams:
    ad_id: str = field(metadata={'path_param': { 'field_name': 'ad_id', 'style': 'simple', 'explode': False }})
    campaign_id: str = field(metadata={'path_param': { 'field_name': 'campaign_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBidSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateBidRequest:
    path_params: UpdateBidPathParams = field()
    request: shared.UpdateBidPercentageRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateBidSecurity = field()
    

@dataclass
class UpdateBidResponse:
    content_type: str = field()
    status_code: int = field()
    
