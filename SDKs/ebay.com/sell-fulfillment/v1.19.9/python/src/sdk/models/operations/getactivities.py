from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
GET_ACTIVITIES_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class GetActivitiesPathParams:
    payment_dispute_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payment_dispute_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetActivitiesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetActivitiesRequest:
    server_url: Optional[str] = field(default=None)
    path_params: GetActivitiesPathParams = field(default=None)
    security: GetActivitiesSecurity = field(default=None)
    

@dataclass
class GetActivitiesResponse:
    content_type: str = field(default=None)
    payment_dispute_activity_history: Optional[shared.PaymentDisputeActivityHistory] = field(default=None)
    status_code: int = field(default=None)
    
