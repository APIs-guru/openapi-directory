from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PushURIToAccountIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class PushURIToAccountID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class PushURIToAccountID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class PushURIToAccountID404ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class PushURIToAccountID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class PushURIToAccountIDRequest:
    security: PushURIToAccountIDSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PushURIToAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    push_uri_to_account_id_400_application_json_object: Optional[PushURIToAccountID400ApplicationJSON] = field(default=None)
    push_uri_to_account_id_401_application_json_object: Optional[PushURIToAccountID401ApplicationJSON] = field(default=None)
    push_uri_to_account_id_404_application_json_object: Optional[PushURIToAccountID404ApplicationJSON] = field(default=None)
    push_uri_to_account_id_500_application_json_object: Optional[PushURIToAccountID500ApplicationJSON] = field(default=None)
    sample: Optional[Any] = field(default=None)
    
