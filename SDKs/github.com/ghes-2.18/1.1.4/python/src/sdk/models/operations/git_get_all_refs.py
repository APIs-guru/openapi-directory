from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GitGetAllRefsPathParams:
    namespace: str = field(default=None, metadata={'path_param': { 'field_name': 'namespace', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitGetAllRefsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GitGetAllRefsRequest:
    path_params: GitGetAllRefsPathParams = field(default=None)
    query_params: GitGetAllRefsQueryParams = field(default=None)
    

@dataclass
class GitGetAllRefsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    git_refs: Optional[List[shared.GitRef]] = field(default=None)
    
