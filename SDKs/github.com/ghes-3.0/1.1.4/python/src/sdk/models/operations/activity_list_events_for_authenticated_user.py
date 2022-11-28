from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListEventsForAuthenticatedUserPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListEventsForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListEventsForAuthenticatedUserRequest:
    path_params: ActivityListEventsForAuthenticatedUserPathParams = field()
    query_params: ActivityListEventsForAuthenticatedUserQueryParams = field()
    

@dataclass
class ActivityListEventsForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    events: Optional[List[shared.Event]] = field(default=None)
    
