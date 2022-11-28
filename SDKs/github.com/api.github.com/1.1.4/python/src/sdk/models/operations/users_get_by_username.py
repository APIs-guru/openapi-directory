from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UsersGetByUsernamePathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetByUsernameRequest:
    path_params: UsersGetByUsernamePathParams = field()
    

@dataclass
class UsersGetByUsernameResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    users_get_by_username_200_application_json_one_of: Optional[Any] = field(default=None)
    
