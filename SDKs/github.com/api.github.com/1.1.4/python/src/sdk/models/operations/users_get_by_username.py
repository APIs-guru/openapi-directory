from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UsersGetByUsernamePathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetByUsernameRequest:
    path_params: UsersGetByUsernamePathParams = field(default=None)
    

@dataclass
class UsersGetByUsernameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    users_get_by_username_200_application_json_one_of: Optional[Any] = field(default=None)
    
