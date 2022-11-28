from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UsersUpdatePrefsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UsersUpdatePrefsRequestBody:
    prefs: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefs') }})
    

@dataclass
class UsersUpdatePrefsSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UsersUpdatePrefsRequest:
    path_params: UsersUpdatePrefsPathParams = field()
    security: UsersUpdatePrefsSecurity = field()
    request: Optional[UsersUpdatePrefsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UsersUpdatePrefsResponse:
    content_type: str = field()
    status_code: int = field()
    preferences: Optional[dict[str, Any]] = field(default=None)
    
