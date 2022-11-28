from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SignUpIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class SignUpID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class SignUpID500ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class SignUpIDRequest:
    security: SignUpIDSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SignUpIDResponse:
    content_type: str = field()
    status_code: int = field()
    demo_auth_response: Optional[Any] = field(default=None)
    sign_up_id_400_application_json_one_of: Optional[Any] = field(default=None)
    sign_up_id_401_application_json_object: Optional[SignUpID401ApplicationJSON] = field(default=None)
    sign_up_id_500_application_json_object: Optional[SignUpID500ApplicationJSON] = field(default=None)
    
