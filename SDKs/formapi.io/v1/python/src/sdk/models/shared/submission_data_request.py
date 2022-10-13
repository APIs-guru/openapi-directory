from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class SubmissionDataRequestAuthSecondFactorTypeEnum(str, Enum):
    NONE = "none"
    PHONE_NUMBER = "phone_number"
    TOTP = "totp"
    MOBILE_PUSH = "mobile_push"
    SECURITY_KEY = "security_key"
    FINGERPRINT = "fingerprint"

class SubmissionDataRequestAuthTypeEnum(str, Enum):
    NONE = "none"
    PASSWORD = "password"
    OAUTH = "oauth"
    EMAIL_LINK = "email_link"
    PHONE_NUMBER = "phone_number"
    LDAP = "ldap"
    SAML = "saml"

class SubmissionDataRequestStateEnum(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"


@dataclass_json
@dataclass
class SubmissionDataRequest:
    auth_phone_number_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_phone_number_hash' }})
    auth_provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_provider' }})
    auth_second_factor_type: Optional[SubmissionDataRequestAuthSecondFactorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_second_factor_type' }})
    auth_session_id_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_session_id_hash' }})
    auth_session_started_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_session_started_at' }})
    auth_type: Optional[SubmissionDataRequestAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_type' }})
    auth_user_id_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_user_id_hash' }})
    auth_username_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_username_hash' }})
    completed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fields: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    metadata: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    sort_order: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_order' }})
    state: SubmissionDataRequestStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_agent' }})
    viewed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewed_at' }})
    
