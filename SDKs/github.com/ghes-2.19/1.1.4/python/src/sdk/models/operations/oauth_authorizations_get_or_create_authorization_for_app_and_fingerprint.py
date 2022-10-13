from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams:
    client_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    fingerprint: str = field(default=None, metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody:
    client_secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_secret' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    note_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note_url' }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    

@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest:
    path_params: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams = field(default=None)
    request: Optional[OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    authorization: Optional[shared.Authorization] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
