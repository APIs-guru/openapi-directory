from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutUUsernamePreferencesAvatarPickJSONPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUUsernamePreferencesAvatarPickJSONRequest:
    path_params: PutUUsernamePreferencesAvatarPickJSONPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUUsernamePreferencesAvatarPickJSONResponse:
    content_type: str = field()
    status_code: int = field()
    put_u_username_preferences_avatar_pick_json_200_application_json_any: Optional[Any] = field(default=None)
    
