from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams:
    commit: str = field(default=None, metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum(str, Enum):
    META = "meta"
    RENDERED = "rendered"


@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams:
    format: Optional[GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    max_depth: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_depth', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams = field(default=None)
    query_params: GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_treeentries: Optional[shared.PaginatedTreeentries] = field(default=None)
    
