from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsAddMemberLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsAddMemberLegacyRequest:
    path_params: TeamsAddMemberLegacyPathParams = field()
    

@dataclass
class TeamsAddMemberLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
