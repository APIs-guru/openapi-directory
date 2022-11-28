from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams:
    client_id: str = field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    fingerprint: str = field(metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody:
    client_secret: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    note_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note_url') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest:
    path_params: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams = field()
    request: Optional[OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    authorization: Optional[shared.Authorization] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
