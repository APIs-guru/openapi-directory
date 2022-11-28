from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsDeleteLegacyPathParams:
    team_id: int = field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteLegacyRequest:
    path_params: TeamsDeleteLegacyPathParams = field()
    

@dataclass
class TeamsDeleteLegacyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
