from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAdminUsersIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminUsersIDJSONRequest:
    path_params: GetAdminUsersIDJSONPathParams = field()
    

@dataclass
class GetAdminUsersIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_admin_users_id_json_200_application_json_any: Optional[Any] = field(default=None)
    
