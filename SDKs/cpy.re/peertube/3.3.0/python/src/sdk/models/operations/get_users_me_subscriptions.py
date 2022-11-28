from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersMeSubscriptionsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeSubscriptionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeSubscriptionsRequest:
    query_params: GetUsersMeSubscriptionsQueryParams = field()
    security: GetUsersMeSubscriptionsSecurity = field()
    

@dataclass
class GetUsersMeSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    video_channel_list: Optional[Any] = field(default=None)
    
