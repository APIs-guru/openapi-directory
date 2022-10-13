from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposListCommitsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListCommitsQueryParams:
    author: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    last_sha: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_sha', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sha: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sha', 'style': 'form', 'explode': True }})
    since: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    top: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'top', 'style': 'form', 'explode': True }})
    until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'until', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListCommitsRequest:
    path_params: ReposListCommitsPathParams = field(default=None)
    query_params: ReposListCommitsQueryParams = field(default=None)
    

@dataclass
class ReposListCommitsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    commits: Optional[List[shared.Commit]] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    
