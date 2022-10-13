from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListReceivedPublicEventsForUserPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListReceivedPublicEventsForUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListReceivedPublicEventsForUserRequest:
    path_params: ActivityListReceivedPublicEventsForUserPathParams = field(default=None)
    query_params: ActivityListReceivedPublicEventsForUserQueryParams = field(default=None)
    

@dataclass
class ActivityListReceivedPublicEventsForUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    
