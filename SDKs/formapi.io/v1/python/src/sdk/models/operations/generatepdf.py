from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GeneratePdfPathParams:
    template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'template_id', 'style': 'simple', 'explode': False }})
    
class GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum(str, Enum):
    NONE = "none"
    PHONE_NUMBER = "phone_number"
    TOTP = "totp"
    MOBILE_PUSH = "mobile_push"
    SECURITY_KEY = "security_key"
    FINGERPRINT = "fingerprint"

class GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum(str, Enum):
    NONE = "none"
    PASSWORD = "password"
    OAUTH = "oauth"
    EMAIL_LINK = "email_link"
    PHONE_NUMBER = "phone_number"
    LDAP = "ldap"
    SAML = "saml"


@dataclass_json
@dataclass
class GeneratePdfSubmissionDataCreateSubmissionDataRequestData:
    auth_phone_number_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_phone_number_hash' }})
    auth_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_provider' }})
    auth_second_factor_type: Optional[GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_second_factor_type' }})
    auth_session_id_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_session_id_hash' }})
    auth_session_started_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_session_started_at' }})
    auth_type: GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_type' }})
    auth_user_id_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_user_id_hash' }})
    auth_username_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_username_hash' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    

@dataclass_json
@dataclass
class GeneratePdfSubmissionData:
    css: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'css' }})
    data: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    data_requests: Optional[List[GeneratePdfSubmissionDataCreateSubmissionDataRequestData]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_requests' }})
    field_overrides: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'field_overrides' }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test' }})
    

@dataclass
class GeneratePdfSecurity:
    api_token_basic: shared.SchemeAPITokenBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GeneratePdfRequest:
    path_params: GeneratePdfPathParams = field(default=None)
    request: GeneratePdfSubmissionData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GeneratePdfSecurity = field(default=None)
    
class GeneratePdfCreateSubmissionResponseStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GeneratePdfCreateSubmissionResponse:
    errors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    status: GeneratePdfCreateSubmissionResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    submission: shared.Submission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submission' }})
    

@dataclass
class GeneratePdfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    authentication_error: Optional[shared.AuthenticationError] = field(default=None)
    create_submission_response: Optional[GeneratePdfCreateSubmissionResponse] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    invalid_request: Optional[shared.InvalidRequest] = field(default=None)
    
