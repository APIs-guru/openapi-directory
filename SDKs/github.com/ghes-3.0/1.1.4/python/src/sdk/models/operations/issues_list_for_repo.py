from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class IssuesListForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class IssuesListForRepoSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    COMMENTS = "comments"

class IssuesListForRepoStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"


@dataclass
class IssuesListForRepoQueryParams:
    assignee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assignee', 'style': 'form', 'explode': True }})
    creator: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'creator', 'style': 'form', 'explode': True }})
    direction: Optional[shared.DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    labels: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'labels', 'style': 'form', 'explode': True }})
    mentioned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mentioned', 'style': 'form', 'explode': True }})
    milestone: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'milestone', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[IssuesListForRepoSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[IssuesListForRepoStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListForRepoRequest:
    path_params: IssuesListForRepoPathParams = field()
    query_params: IssuesListForRepoQueryParams = field()
    

@dataclass
class IssuesListForRepoResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue_simples: Optional[List[shared.IssueSimple]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
