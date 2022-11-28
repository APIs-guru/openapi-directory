from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposAddTeamAccessRestrictionsPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposAddTeamAccessRestrictionsRequestBody:
    teams: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    

@dataclass
class ReposAddTeamAccessRestrictionsRequest:
    path_params: ReposAddTeamAccessRestrictionsPathParams = field()
    request: Optional[ReposAddTeamAccessRestrictionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposAddTeamAccessRestrictionsResponse:
    content_type: str = field()
    status_code: int = field()
    teams: Optional[List[shared.Team]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
