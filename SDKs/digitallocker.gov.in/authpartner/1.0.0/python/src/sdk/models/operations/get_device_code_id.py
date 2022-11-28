from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDeviceCodeIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetDeviceCodeID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetDeviceCodeIDRequest:
    security: GetDeviceCodeIDSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDeviceCodeIDResponse:
    content_type: str = field()
    status_code: int = field()
    device_authorization_code_response: Optional[shared.DeviceAuthorizationCodeResponse] = field(default=None)
    get_device_code_id_400_application_json_one_of: Optional[Any] = field(default=None)
    get_device_code_id_401_application_json_object: Optional[GetDeviceCodeID401ApplicationJSON] = field(default=None)
    get_device_code_id_500_application_json_one_of: Optional[Any] = field(default=None)
    
