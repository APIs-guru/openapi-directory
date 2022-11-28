from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDataRequestPathParams:
    data_request_id: str = field(metadata={'path_param': { 'field_name': 'data_request_id', 'style': 'simple', 'explode': False }})
    
class UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum(str, Enum):
    NONE = "none"
    PHONE_NUMBER = "phone_number"
    TOTP = "totp"
    MOBILE_PUSH = "mobile_push"
    SECURITY_KEY = "security_key"
    FINGERPRINT = "fingerprint"

class UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum(str, Enum):
    NONE = "none"
    PASSWORD = "password"
    OAUTH = "oauth"
    EMAIL_LINK = "email_link"
    PHONE_NUMBER = "phone_number"
    LDAP = "ldap"
    SAML = "saml"


@dataclass_json
@dataclass
class UpdateDataRequestUpdateSubmissionDataRequestData:
    auth_phone_number_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_phone_number_hash') }})
    auth_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_provider') }})
    auth_second_factor_type: Optional[UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_second_factor_type') }})
    auth_session_id_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_session_id_hash') }})
    auth_session_started_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_session_started_at') }})
    auth_type: Optional[UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_type') }})
    auth_user_id_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_user_id_hash') }})
    auth_username_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_username_hash') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    

@dataclass
class UpdateDataRequestSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    
class UpdateDataRequestUpdateDataRequestResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateDataRequestUpdateDataRequestResponse:
    data_request: shared.SubmissionDataRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_request') }})
    status: UpdateDataRequestUpdateDataRequestResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class UpdateDataRequestRequest:
    path_params: UpdateDataRequestPathParams = field()
    request: UpdateDataRequestUpdateSubmissionDataRequestData = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateDataRequestSecurity = field()
    

@dataclass
class UpdateDataRequestResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_request: Optional[shared.InvalidRequest] = field(default=None)
    update_data_request_response: Optional[UpdateDataRequestUpdateDataRequestResponse] = field(default=None)
    
