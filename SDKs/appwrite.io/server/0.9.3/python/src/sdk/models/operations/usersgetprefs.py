from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UsersGetPrefsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetPrefsSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersGetPrefsRequest:
    path_params: UsersGetPrefsPathParams = field()
    security: UsersGetPrefsSecurity = field()
    

@dataclass
class UsersGetPrefsResponse:
    content_type: str = field()
    status_code: int = field()
    preferences: Optional[dict[str, Any]] = field(default=None)
    
