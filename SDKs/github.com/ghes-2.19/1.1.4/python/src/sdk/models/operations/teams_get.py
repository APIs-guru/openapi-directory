from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsGetPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsGetRequest:
    path_params: TeamsGetPathParams = field()
    

@dataclass
class TeamsGetResponse:
    content_type: str = field()
    status_code: int = field()
    team_full: Optional[shared.TeamFull] = field(default=None)
    
