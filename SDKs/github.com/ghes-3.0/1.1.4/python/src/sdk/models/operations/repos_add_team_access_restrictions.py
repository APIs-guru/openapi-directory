from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposAddTeamAccessRestrictionsPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposAddTeamAccessRestrictionsRequestBody1:
    teams: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    

@dataclass
class ReposAddTeamAccessRestrictionsRequest:
    path_params: ReposAddTeamAccessRestrictionsPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposAddTeamAccessRestrictionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teams: Optional[List[shared.Team]] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
