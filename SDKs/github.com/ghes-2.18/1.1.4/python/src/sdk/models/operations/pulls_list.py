from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PullsListPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class PullsListDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class PullsListSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    POPULARITY = "popularity"
    LONG_RUNNING = "long-running"

class PullsListStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"


@dataclass
class PullsListQueryParams:
    base: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base', 'style': 'form', 'explode': True }})
    direction: Optional[PullsListDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    head: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'head', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[PullsListSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    state: Optional[PullsListStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class PullsListRequest:
    path_params: PullsListPathParams = field()
    query_params: PullsListQueryParams = field()
    

@dataclass
class PullsListResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    pull_request_simples: Optional[List[shared.PullRequestSimple]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
