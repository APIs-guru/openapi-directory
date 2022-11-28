from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposCreateCommitSignatureProtectionPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposCreateCommitSignatureProtectionRequest:
    path_params: ReposCreateCommitSignatureProtectionPathParams = field()
    

@dataclass
class ReposCreateCommitSignatureProtectionResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    protected_branch_admin_enforced: Optional[shared.ProtectedBranchAdminEnforced] = field(default=None)
    
