from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class TestAuthenticationSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class TestAuthenticationAuthenticationSuccessResponseStatusEnum(str, Enum):
    SUCCESS = "success"


@dataclass_json
@dataclass
class TestAuthenticationAuthenticationSuccessResponse:
    status: TestAuthenticationAuthenticationSuccessResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class TestAuthenticationRequest:
    security: TestAuthenticationSecurity = field()
    

@dataclass
class TestAuthenticationResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    authentication_success_response: Optional[TestAuthenticationAuthenticationSuccessResponse] = field(default=None)
    
