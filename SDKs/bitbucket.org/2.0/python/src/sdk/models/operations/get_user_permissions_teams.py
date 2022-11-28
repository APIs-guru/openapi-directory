from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserPermissionsTeamsQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserPermissionsTeamsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserPermissionsTeamsRequest:
    query_params: GetUserPermissionsTeamsQueryParams = field()
    security: GetUserPermissionsTeamsSecurity = field()
    

@dataclass
class GetUserPermissionsTeamsResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_team_permissions: Optional[shared.PaginatedTeamPermissions] = field(default=None)
    
