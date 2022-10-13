from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposGetUsersWithAccessToProtectedBranchPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetUsersWithAccessToProtectedBranchRequest:
    path_params: ReposGetUsersWithAccessToProtectedBranchPathParams = field(default=None)
    

@dataclass
class ReposGetUsersWithAccessToProtectedBranchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    simple_users: Optional[List[shared.SimpleUser]] = field(default=None)
    
