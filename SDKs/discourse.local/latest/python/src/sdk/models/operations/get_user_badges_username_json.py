from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserBadgesUsernameJSONPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserBadgesUsernameJSONRequest:
    path_params: GetUserBadgesUsernameJSONPathParams = field(default=None)
    

@dataclass
class GetUserBadgesUsernameJSONResponse:
    content_type: str = field(default=None)
    get_user_badges_username_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
