from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReposGetTeamsWithAccessToProtectedBranchPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetTeamsWithAccessToProtectedBranchRequest:
    path_params: ReposGetTeamsWithAccessToProtectedBranchPathParams = field()
    

@dataclass
class ReposGetTeamsWithAccessToProtectedBranchResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    teams: Optional[List[shared.Team]] = field(default=None)
    
