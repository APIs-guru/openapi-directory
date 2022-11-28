from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutAdminUsersIDAnonymizeJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdminUsersIDAnonymizeJSONRequest:
    path_params: PutAdminUsersIDAnonymizeJSONPathParams = field()
    

@dataclass
class PutAdminUsersIDAnonymizeJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_admin_users_id_anonymize_json_200_application_json_any: Optional[Any] = field(default=None)
    
