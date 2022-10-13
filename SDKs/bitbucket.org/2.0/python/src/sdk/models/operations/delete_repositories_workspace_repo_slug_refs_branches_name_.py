from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity:
    option1: Optional[DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest:
    path_params: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams = field(default=None)
    security: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity = field(default=None)
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
