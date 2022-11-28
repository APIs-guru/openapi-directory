from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class AccountUpdatePrefsRequestBody:
    prefs: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefs') }})
    

@dataclass
class AccountUpdatePrefsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountUpdatePrefsRequest:
    security: AccountUpdatePrefsSecurity = field()
    request: Optional[AccountUpdatePrefsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AccountUpdatePrefsResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
