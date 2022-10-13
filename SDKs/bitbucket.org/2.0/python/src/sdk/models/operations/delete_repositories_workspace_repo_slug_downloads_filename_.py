from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams:
    filename: str = field(default=None, metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity:
    option1: Optional[DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest:
    path_params: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams = field(default=None)
    security: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity = field(default=None)
    

@dataclass
class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
