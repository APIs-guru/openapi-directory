from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReposListForksPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposListForksSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"
    STARGAZERS = "stargazers"
    WATCHERS = "watchers"


@dataclass
class ReposListForksQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[ReposListForksSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListForksRequest:
    path_params: ReposListForksPathParams = field()
    query_params: ReposListForksQueryParams = field()
    

@dataclass
class ReposListForksResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    
