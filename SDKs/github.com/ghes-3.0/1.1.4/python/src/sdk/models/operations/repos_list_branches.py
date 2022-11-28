from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposListBranchesPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposListBranchesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    protected: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'protected', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListBranchesRequest:
    path_params: ReposListBranchesPathParams = field()
    query_params: ReposListBranchesQueryParams = field()
    

@dataclass
class ReposListBranchesResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    short_branches: Optional[List[shared.ShortBranch]] = field(default=None)
    
