from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class AccountUpdatePrefsRequestBody:
    prefs: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prefs' }})
    

@dataclass
class AccountUpdatePrefsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountUpdatePrefsRequest:
    request: Optional[AccountUpdatePrefsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AccountUpdatePrefsSecurity = field(default=None)
    

@dataclass
class AccountUpdatePrefsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
