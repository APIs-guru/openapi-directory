from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class VerifyOtpIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class VerifyOtpID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class VerifyOtpID500ApplicationJSON:
    error: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class VerifyOtpIDRequest:
    security: VerifyOtpIDSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class VerifyOtpIDResponse:
    content_type: str = field()
    status_code: int = field()
    demo_auth_verify_response: Optional[Any] = field(default=None)
    verify_otp_id_400_application_json_one_of: Optional[Any] = field(default=None)
    verify_otp_id_401_application_json_object: Optional[VerifyOtpID401ApplicationJSON] = field(default=None)
    verify_otp_id_500_application_json_object: Optional[VerifyOtpID500ApplicationJSON] = field(default=None)
    
