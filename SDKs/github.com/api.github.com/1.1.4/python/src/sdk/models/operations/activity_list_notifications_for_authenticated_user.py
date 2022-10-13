from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListNotificationsForAuthenticatedUserQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    participating: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'participating', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListNotificationsForAuthenticatedUserRequest:
    query_params: ActivityListNotificationsForAuthenticatedUserQueryParams = field(default=None)
    

@dataclass
class ActivityListNotificationsForAuthenticatedUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    threads: Optional[List[shared.Thread]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
