from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayoutPathParams:
    payout_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payout_Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayoutSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayoutRequest:
    path_params: GetPayoutPathParams = field(default=None)
    security: GetPayoutSecurity = field(default=None)
    

@dataclass
class GetPayoutResponse:
    content_type: str = field(default=None)
    payout: Optional[shared.Payout] = field(default=None)
    status_code: int = field(default=None)
    
