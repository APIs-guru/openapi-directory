from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams:
    commit: str = field(default=None, metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity:
    option1: Optional[PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest:
    path_params: PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams = field(default=None)
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity = field(default=None)
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    commitstatus: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
