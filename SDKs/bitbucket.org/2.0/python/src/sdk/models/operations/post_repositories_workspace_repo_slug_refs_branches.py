from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsBranchesPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurity:
    option1: Optional[PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugRefsBranchesPathParams = field(default=None)
    security: PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurity = field(default=None)
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    branch: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
