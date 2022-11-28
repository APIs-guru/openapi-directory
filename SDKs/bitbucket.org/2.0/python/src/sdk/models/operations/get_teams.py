from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetTeamsRoleEnum(str, Enum):
    ADMIN = "admin"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"


@dataclass
class GetTeamsQueryParams:
    role: Optional[GetTeamsRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsRequest:
    query_params: GetTeamsQueryParams = field()
    security: GetTeamsSecurity = field()
    

@dataclass
class GetTeamsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_teams: Optional[shared.PaginatedTeams] = field(default=None)
    
