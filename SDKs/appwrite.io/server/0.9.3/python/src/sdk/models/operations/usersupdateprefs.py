from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UsersUpdatePrefsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UsersUpdatePrefsRequestBody:
    prefs: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefs' }})
    

@dataclass
class UsersUpdatePrefsSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersUpdatePrefsRequest:
    path_params: UsersUpdatePrefsPathParams = field(default=None)
    request: Optional[UsersUpdatePrefsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UsersUpdatePrefsSecurity = field(default=None)
    

@dataclass
class UsersUpdatePrefsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preferences: Optional[dict[str, Any]] = field(default=None)
    
