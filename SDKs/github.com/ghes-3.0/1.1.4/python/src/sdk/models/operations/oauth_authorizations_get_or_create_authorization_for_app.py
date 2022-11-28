from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody:
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    note_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note_url') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppRequest:
    path_params: OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams = field()
    request: Optional[OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    authorization: Optional[shared.Authorization] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
