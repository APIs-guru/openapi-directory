from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class IssuesListCommentsForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class IssuesListCommentsForRepoDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class IssuesListCommentsForRepoQueryParams:
    direction: Optional[IssuesListCommentsForRepoDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[shared.SortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class IssuesListCommentsForRepoRequest:
    path_params: IssuesListCommentsForRepoPathParams = field()
    query_params: IssuesListCommentsForRepoQueryParams = field()
    

@dataclass
class IssuesListCommentsForRepoResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    issue_comments: Optional[List[shared.IssueComment]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
