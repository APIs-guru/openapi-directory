from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAdminUsersIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAdminUsersIDJSONRequest:
    path_params: DeleteAdminUsersIDJSONPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteAdminUsersIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    delete_admin_users_id_json_200_application_json_any: Optional[Any] = field(default=None)
    
