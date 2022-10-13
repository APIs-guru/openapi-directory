from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutUUsernamePreferencesAvatarPickJSONPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUUsernamePreferencesAvatarPickJSONRequest:
    path_params: PutUUsernamePreferencesAvatarPickJSONPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUUsernamePreferencesAvatarPickJSONResponse:
    content_type: str = field(default=None)
    put_u_username_preferences_avatar_pick_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
