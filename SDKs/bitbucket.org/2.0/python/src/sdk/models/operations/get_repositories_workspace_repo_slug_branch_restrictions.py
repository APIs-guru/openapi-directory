from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams:
    kind: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'kind', 'style': 'form', 'explode': True }})
    pattern: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pattern', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams = field(default=None)
    query_params: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsQueryParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_branchrestrictions: Optional[shared.PaginatedBranchrestrictions] = field(default=None)
    
