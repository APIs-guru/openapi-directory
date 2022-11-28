from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OauthAuthorizationsUpdateAuthorizationPathParams:
    authorization_id: int = field(metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OauthAuthorizationsUpdateAuthorizationRequestBody:
    add_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_scopes') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    note_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note_url') }})
    remove_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove_scopes') }})
    scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclass
class OauthAuthorizationsUpdateAuthorizationRequest:
    path_params: OauthAuthorizationsUpdateAuthorizationPathParams = field()
    request: Optional[OauthAuthorizationsUpdateAuthorizationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OauthAuthorizationsUpdateAuthorizationResponse:
    content_type: str = field()
    status_code: int = field()
    authorization: Optional[shared.Authorization] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
