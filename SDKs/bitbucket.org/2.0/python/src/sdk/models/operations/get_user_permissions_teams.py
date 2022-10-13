from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserPermissionsTeamsQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserPermissionsTeamsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserPermissionsTeamsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUserPermissionsTeamsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUserPermissionsTeamsSecurity:
    option1: Optional[GetUserPermissionsTeamsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserPermissionsTeamsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUserPermissionsTeamsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserPermissionsTeamsRequest:
    query_params: GetUserPermissionsTeamsQueryParams = field(default=None)
    security: GetUserPermissionsTeamsSecurity = field(default=None)
    

@dataclass
class GetUserPermissionsTeamsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_team_permissions: Optional[shared.PaginatedTeamPermissions] = field(default=None)
    
