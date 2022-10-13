from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetTeamsRoleEnum(str, Enum):
    ADMIN = "admin"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"


@dataclass
class GetTeamsQueryParams:
    role: Optional[GetTeamsRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeamsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTeamsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsSecurity:
    option1: Optional[GetTeamsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTeamsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetTeamsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTeamsRequest:
    query_params: GetTeamsQueryParams = field(default=None)
    security: GetTeamsSecurity = field(default=None)
    

@dataclass
class GetTeamsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_teams: Optional[shared.PaginatedTeams] = field(default=None)
    
