from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateDataRequestPathParams:
    data_request_id: str = field(default=None, metadata={'path_param': { 'field_name': 'data_request_id', 'style': 'simple', 'explode': False }})
    
class UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum(str, Enum):
    NONE = "none"
    PHONE_NUMBER = "phone_number"
    TOTP = "totp"
    MOBILE_PUSH = "mobile_push"
    SECURITY_KEY = "security_key"
    FINGERPRINT = "fingerprint"

class UpdateDataRequestRequestBodyAuthTypeEnum(str, Enum):
    NONE = "none"
    PASSWORD = "password"
    OAUTH = "oauth"
    EMAIL_LINK = "email_link"
    PHONE_NUMBER = "phone_number"
    LDAP = "ldap"
    SAML = "saml"


@dataclass_json
@dataclass
class UpdateDataRequestRequestBodyUpdateSubmissionDataRequestData:
    auth_phone_number_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_phone_number_hash' }})
    auth_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_provider' }})
    auth_second_factor_type: Optional[UpdateDataRequestRequestBodyAuthSecondFactorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_second_factor_type' }})
    auth_session_id_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_session_id_hash' }})
    auth_session_started_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_session_started_at' }})
    auth_type: Optional[UpdateDataRequestRequestBodyAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_type' }})
    auth_user_id_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_user_id_hash' }})
    auth_username_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_username_hash' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    

@dataclass
class UpdateDataRequestSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDataRequestRequest:
    path_params: UpdateDataRequestPathParams = field(default=None)
    request: UpdateDataRequestRequestBodyUpdateSubmissionDataRequestData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDataRequestSecurity = field(default=None)
    
class UpdateDataRequest200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateDataRequest200ApplicationJSONUpdateDataRequestResponse:
    data_request: shared.SubmissionDataRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_request' }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: UpdateDataRequest200ApplicationJSONStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class UpdateDataRequestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_request: Optional[shared.InvalidRequest] = field(default=None)
    update_data_request_response: Optional[UpdateDataRequest200ApplicationJSONUpdateDataRequestResponse] = field(default=None)
    
