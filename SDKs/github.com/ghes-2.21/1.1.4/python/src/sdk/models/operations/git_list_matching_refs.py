from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GitListMatchingRefsPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    ref: str = field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class GitListMatchingRefsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GitListMatchingRefsRequest:
    path_params: GitListMatchingRefsPathParams = field()
    query_params: GitListMatchingRefsQueryParams = field()
    

@dataclass
class GitListMatchingRefsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    git_refs: Optional[List[shared.GitRef]] = field(default=None)
    
