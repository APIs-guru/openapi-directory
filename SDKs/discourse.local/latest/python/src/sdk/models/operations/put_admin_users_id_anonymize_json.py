from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutAdminUsersIDAnonymizeJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdminUsersIDAnonymizeJSONRequest:
    path_params: PutAdminUsersIDAnonymizeJSONPathParams = field(default=None)
    

@dataclass
class PutAdminUsersIDAnonymizeJSONResponse:
    content_type: str = field(default=None)
    put_admin_users_id_anonymize_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
