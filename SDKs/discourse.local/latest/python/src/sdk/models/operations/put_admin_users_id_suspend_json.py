from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutAdminUsersIDSuspendJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdminUsersIDSuspendJSONRequest:
    path_params: PutAdminUsersIDSuspendJSONPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAdminUsersIDSuspendJSONResponse:
    content_type: str = field(default=None)
    put_admin_users_id_suspend_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
