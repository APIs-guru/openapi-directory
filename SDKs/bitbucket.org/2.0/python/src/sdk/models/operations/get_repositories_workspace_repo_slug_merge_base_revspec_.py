from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    revspec: str = field(default=None, metadata={'path_param': { 'field_name': 'revspec', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    commit: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
