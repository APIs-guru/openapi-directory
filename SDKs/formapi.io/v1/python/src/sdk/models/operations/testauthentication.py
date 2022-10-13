from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class TestAuthenticationSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class TestAuthenticationRequest:
    security: TestAuthenticationSecurity = field(default=None)
    
class TestAuthentication200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class TestAuthentication200ApplicationJSONAuthenticationSuccessResponse:
    status: TestAuthentication200ApplicationJSONStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class TestAuthenticationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    authentication_success_response: Optional[TestAuthentication200ApplicationJSONAuthenticationSuccessResponse] = field(default=None)
    
