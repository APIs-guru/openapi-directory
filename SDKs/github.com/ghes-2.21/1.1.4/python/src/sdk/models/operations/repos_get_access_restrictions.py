from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetAccessRestrictionsPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetAccessRestrictionsRequest:
    path_params: ReposGetAccessRestrictionsPathParams = field()
    

@dataclass
class ReposGetAccessRestrictionsResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    branch_restriction_policy: Optional[shared.BranchRestrictionPolicy] = field(default=None)
    
