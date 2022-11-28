from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class ActivityListRepoNotificationsForAuthenticatedUserPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityListRepoNotificationsForAuthenticatedUserQueryParams:
    all: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    participating: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'participating', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListRepoNotificationsForAuthenticatedUserRequest:
    path_params: ActivityListRepoNotificationsForAuthenticatedUserPathParams = field()
    query_params: ActivityListRepoNotificationsForAuthenticatedUserQueryParams = field()
    

@dataclass
class ActivityListRepoNotificationsForAuthenticatedUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    threads: Optional[List[shared.Thread]] = field(default=None)
    
