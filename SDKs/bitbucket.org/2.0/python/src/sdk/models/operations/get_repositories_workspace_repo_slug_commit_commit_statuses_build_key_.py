from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams:
    commit: str = field(default=None, metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    commitstatus: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
