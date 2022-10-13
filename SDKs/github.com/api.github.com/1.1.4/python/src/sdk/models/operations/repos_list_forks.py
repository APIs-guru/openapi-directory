from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ReposListForksPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposListForksSortEnum(str, Enum):
    NEWEST = "newest"
    OLDEST = "oldest"
    STARGAZERS = "stargazers"
    WATCHERS = "watchers"


@dataclass
class ReposListForksQueryParams:
    org: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'org', 'style': 'form', 'explode': True }})
    organization: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'organization', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[ReposListForksSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class ReposListForksRequest:
    path_params: ReposListForksPathParams = field(default=None)
    query_params: ReposListForksQueryParams = field(default=None)
    

@dataclass
class ReposListForksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    minimal_repositories: Optional[List[shared.MinimalRepository]] = field(default=None)
    scim_error: Optional[shared.ScimError] = field(default=None)
    
