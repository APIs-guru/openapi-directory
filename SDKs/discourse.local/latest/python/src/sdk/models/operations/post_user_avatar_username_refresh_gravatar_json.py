from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostUserAvatarUsernameRefreshGravatarJSONPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostUserAvatarUsernameRefreshGravatarJSONRequest:
    path_params: PostUserAvatarUsernameRefreshGravatarJSONPathParams = field(default=None)
    

@dataclass
class PostUserAvatarUsernameRefreshGravatarJSONResponse:
    content_type: str = field(default=None)
    post_user_avatar_username_refresh_gravatar_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
