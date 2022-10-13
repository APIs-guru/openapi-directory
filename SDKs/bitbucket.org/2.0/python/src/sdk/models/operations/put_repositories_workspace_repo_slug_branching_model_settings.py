from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity:
    option1: Optional[PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest:
    path_params: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsPathParams = field(default=None)
    security: PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsSecurity = field(default=None)
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    branching_model_settings: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
