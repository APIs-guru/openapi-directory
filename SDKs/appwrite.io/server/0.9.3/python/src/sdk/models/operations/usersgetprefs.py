from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UsersGetPrefsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetPrefsSecurity:
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersGetPrefsRequest:
    path_params: UsersGetPrefsPathParams = field(default=None)
    security: UsersGetPrefsSecurity = field(default=None)
    

@dataclass
class UsersGetPrefsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    preferences: Optional[dict[str, Any]] = field(default=None)
    
