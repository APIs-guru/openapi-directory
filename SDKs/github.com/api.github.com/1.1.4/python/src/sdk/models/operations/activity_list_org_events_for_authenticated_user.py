from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListOrgEventsForAuthenticatedUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListOrgEventsForAuthenticatedUserQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListOrgEventsForAuthenticatedUserRequest:
    path_params: ActivityListOrgEventsForAuthenticatedUserPathParams = field(default=None)
    query_params: ActivityListOrgEventsForAuthenticatedUserQueryParams = field(default=None)
    

@dataclass
class ActivityListOrgEventsForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    
