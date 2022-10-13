from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutUUsernamePreferencesEmailJSONPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutUUsernamePreferencesEmailJSONRequest:
    path_params: PutUUsernamePreferencesEmailJSONPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutUUsernamePreferencesEmailJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
