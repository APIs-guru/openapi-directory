from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostAdminUsersIDLogOutJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAdminUsersIDLogOutJSONRequest:
    path_params: PostAdminUsersIDLogOutJSONPathParams = field()
    

@dataclass
class PostAdminUsersIDLogOutJSONResponse:
    content_type: str = field()
    status_code: int = field()
    post_admin_users_id_log_out_json_200_application_json_any: Optional[Any] = field(default=None)
    
