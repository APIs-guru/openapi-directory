from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDeviceCodeIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDeviceCodeIDRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetDeviceCodeIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDeviceCodeID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetDeviceCodeIDResponse:
    content_type: str = field(default=None)
    device_authorization_code_response: Optional[shared.DeviceAuthorizationCodeResponse] = field(default=None)
    get_device_code_id_400_application_json_one_of: Optional[Any] = field(default=None)
    get_device_code_id_401_application_json_object: Optional[GetDeviceCodeID401ApplicationJSON] = field(default=None)
    get_device_code_id_500_application_json_one_of: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
