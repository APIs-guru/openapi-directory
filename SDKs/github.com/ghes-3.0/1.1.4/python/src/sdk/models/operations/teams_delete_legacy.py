from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TeamsDeleteLegacyPathParams:
    team_id: int = field(default=None, metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TeamsDeleteLegacyRequest:
    path_params: TeamsDeleteLegacyPathParams = field(default=None)
    

@dataclass
class TeamsDeleteLegacyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
