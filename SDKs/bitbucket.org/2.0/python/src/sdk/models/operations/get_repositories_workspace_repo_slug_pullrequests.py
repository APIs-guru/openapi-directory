from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum(str, Enum):
    MERGED = "MERGED"
    SUPERSEDED = "SUPERSEDED"
    OPEN = "OPEN"
    DECLINED = "DECLINED"


@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams:
    state: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugPullrequestsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugPullrequestsPathParams = field(default=None)
    query_params: GetRepositoriesWorkspaceRepoSlugPullrequestsQueryParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugPullrequestsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pullrequests: Optional[shared.PaginatedPullrequests] = field(default=None)
    
