from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayoutPathParams:
    payout_id: str = field(metadata={'path_param': { 'field_name': 'payout_Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayoutSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayoutRequest:
    path_params: GetPayoutPathParams = field()
    security: GetPayoutSecurity = field()
    

@dataclass
class GetPayoutResponse:
    content_type: str = field()
    status_code: int = field()
    payout: Optional[shared.Payout] = field(default=None)
    
