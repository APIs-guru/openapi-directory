from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class OauthAuthorizationsCreateAuthorizationRequestBody:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    note_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note_url') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclass
class OauthAuthorizationsCreateAuthorizationRequest:
    request: Optional[OauthAuthorizationsCreateAuthorizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OauthAuthorizationsCreateAuthorizationResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    authorization: Optional[shared.Authorization] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
