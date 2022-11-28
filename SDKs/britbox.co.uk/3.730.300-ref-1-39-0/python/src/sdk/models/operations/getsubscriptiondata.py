from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionDataPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionDataRequest:
    path_params: GetSubscriptionDataPathParams = field()
    

@dataclass
class GetSubscriptionDataResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    subscription_details: Optional[shared.SubscriptionDetails] = field(default=None)
    
