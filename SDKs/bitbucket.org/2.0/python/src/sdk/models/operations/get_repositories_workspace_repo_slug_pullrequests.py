from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum(str, Enum):
    MERGED = "MERGED"
    SUPERSEDED = "SUPERSEDED"
    OPEN = "OPEN"
    DECLINED = "DECLINED"


@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams:
    state: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams = field()
    query_params: GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams = field()
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pullrequests: Optional[shared.PaginatedPullrequests] = field(default=None)
    
