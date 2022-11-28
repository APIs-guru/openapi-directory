from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class IssuesListForOrgPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    
class IssuesListForOrgFilterEnum(str, Enum):
    ASSIGNED = "assigned"
    CREATED = "created"
    MENTIONED = "mentioned"
    SUBSCRIBED = "subscribed"
    REPOS = "repos"
    ALL = "all"

class IssuesListForOrgSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    COMMENTS = "comments"

class IssuesListForOrgStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"


@dataclass
class IssuesListForOrgQueryParams:
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    filter: Optional[IssuesListForOrgFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    labels: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labels', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[IssuesListForOrgSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[IssuesListForOrgStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListForOrgRequest:
    path_params: IssuesListForOrgPathParams = field()
    query_params: IssuesListForOrgQueryParams = field()
    

@dataclass
class IssuesListForOrgResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issues: Optional[List[shared.Issue]] = field(default=None)
    
