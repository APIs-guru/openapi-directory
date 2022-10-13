from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugSrcFormatEnum(str, Enum):
    META = "meta"


@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcQueryParams:
    format: Optional[GetRepositoriesWorkspaceRepoSlugSrcFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugSrcSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugSrcSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugSrcSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugSrcPathParams = field(default=None)
    query_params: GetRepositoriesWorkspaceRepoSlugSrcQueryParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugSrcSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_treeentries: Optional[shared.PaginatedTreeentries] = field(default=None)
    
