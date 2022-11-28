from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityStarRepoForAuthenticatedUserPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityStarRepoForAuthenticatedUserRequest:
    path_params: ActivityStarRepoForAuthenticatedUserPathParams = field()
    

@dataclass
class ActivityStarRepoForAuthenticatedUserResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
