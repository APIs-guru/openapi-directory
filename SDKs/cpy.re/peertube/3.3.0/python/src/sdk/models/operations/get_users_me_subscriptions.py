from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersMeSubscriptionsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeSubscriptionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeSubscriptionsRequest:
    query_params: GetUsersMeSubscriptionsQueryParams = field(default=None)
    security: GetUsersMeSubscriptionsSecurity = field(default=None)
    

@dataclass
class GetUsersMeSubscriptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_channel_list: Optional[Any] = field(default=None)
    
