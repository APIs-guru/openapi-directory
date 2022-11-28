from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APIConfigHandlerAuthFailActionEnum(str, Enum):
    AUTH_FAIL_ACTION_UNSPECIFIED = "AUTH_FAIL_ACTION_UNSPECIFIED"
    AUTH_FAIL_ACTION_REDIRECT = "AUTH_FAIL_ACTION_REDIRECT"
    AUTH_FAIL_ACTION_UNAUTHORIZED = "AUTH_FAIL_ACTION_UNAUTHORIZED"

class APIConfigHandlerLoginEnum(str, Enum):
    LOGIN_UNSPECIFIED = "LOGIN_UNSPECIFIED"
    LOGIN_OPTIONAL = "LOGIN_OPTIONAL"
    LOGIN_ADMIN = "LOGIN_ADMIN"
    LOGIN_REQUIRED = "LOGIN_REQUIRED"

class APIConfigHandlerSecurityLevelEnum(str, Enum):
    SECURE_UNSPECIFIED = "SECURE_UNSPECIFIED"
    SECURE_DEFAULT = "SECURE_DEFAULT"
    SECURE_NEVER = "SECURE_NEVER"
    SECURE_OPTIONAL = "SECURE_OPTIONAL"
    SECURE_ALWAYS = "SECURE_ALWAYS"


@dataclass_json
@dataclass
class APIConfigHandler:
    r"""APIConfigHandler
    Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration for API handlers.
    """
    
    auth_fail_action: Optional[APIConfigHandlerAuthFailActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authFailAction') }})
    login: Optional[APIConfigHandlerLoginEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    security_level: Optional[APIConfigHandlerSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityLevel') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
