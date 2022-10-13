from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposSetAdminBranchProtectionPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposSetAdminBranchProtectionRequest:
    path_params: ReposSetAdminBranchProtectionPathParams = field(default=None)
    

@dataclass
class ReposSetAdminBranchProtectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protected_branch_admin_enforced: Optional[shared.ProtectedBranchAdminEnforced] = field(default=None)
    
