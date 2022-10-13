from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAdminUsersIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminUsersIDJSONRequest:
    path_params: GetAdminUsersIDJSONPathParams = field(default=None)
    

@dataclass
class GetAdminUsersIDJSONResponse:
    content_type: str = field(default=None)
    get_admin_users_id_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
