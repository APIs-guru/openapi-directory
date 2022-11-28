from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


GET_ACTIVITIES_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class GetActivitiesPathParams:
    payment_dispute_id: str = field(metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetActivitiesSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetActivitiesRequest:
    path_params: GetActivitiesPathParams = field()
    security: GetActivitiesSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetActivitiesResponse:
    content_type: str = field()
    status_code: int = field()
    payment_dispute_activity_history: Optional[shared.PaymentDisputeActivityHistory] = field(default=None)
    
