from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostAdminUsersIDLogOutJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAdminUsersIDLogOutJSONRequest:
    path_params: PostAdminUsersIDLogOutJSONPathParams = field(default=None)
    

@dataclass
class PostAdminUsersIDLogOutJSONResponse:
    content_type: str = field(default=None)
    post_admin_users_id_log_out_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
