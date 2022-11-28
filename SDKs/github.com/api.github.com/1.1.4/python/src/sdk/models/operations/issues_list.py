from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class IssuesListFilterEnum(str, Enum):
    ASSIGNED = "assigned"
    CREATED = "created"
    MENTIONED = "mentioned"
    SUBSCRIBED = "subscribed"
    REPOS = "repos"
    ALL = "all"

class IssuesListSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    COMMENTS = "comments"

class IssuesListStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"


@dataclass
class IssuesListQueryParams:
    collab: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'collab', 'style': 'form', 'explode': True }})
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[IssuesListFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    labels: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labels', 'style': 'form', 'explode': True }})
    orgs: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'orgs', 'style': 'form', 'explode': True }})
    owned: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'owned', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    pulls: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pulls', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[IssuesListSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[IssuesListStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListRequest:
    query_params: IssuesListQueryParams = field()
    

@dataclass
class IssuesListResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issues: Optional[List[shared.Issue]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
