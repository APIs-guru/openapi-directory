from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import apiendpointhandler
from . import scripthandler
from . import staticfileshandler

class URLMapAuthFailActionEnum(str, Enum):
    AUTH_FAIL_ACTION_UNSPECIFIED = "AUTH_FAIL_ACTION_UNSPECIFIED"
    AUTH_FAIL_ACTION_REDIRECT = "AUTH_FAIL_ACTION_REDIRECT"
    AUTH_FAIL_ACTION_UNAUTHORIZED = "AUTH_FAIL_ACTION_UNAUTHORIZED"

class URLMapLoginEnum(str, Enum):
    LOGIN_UNSPECIFIED = "LOGIN_UNSPECIFIED"
    LOGIN_OPTIONAL = "LOGIN_OPTIONAL"
    LOGIN_ADMIN = "LOGIN_ADMIN"
    LOGIN_REQUIRED = "LOGIN_REQUIRED"

class URLMapRedirectHTTPResponseCodeEnum(str, Enum):
    REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED = "REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED"
    REDIRECT_HTTP_RESPONSE_CODE_301 = "REDIRECT_HTTP_RESPONSE_CODE_301"
    REDIRECT_HTTP_RESPONSE_CODE_302 = "REDIRECT_HTTP_RESPONSE_CODE_302"
    REDIRECT_HTTP_RESPONSE_CODE_303 = "REDIRECT_HTTP_RESPONSE_CODE_303"
    REDIRECT_HTTP_RESPONSE_CODE_307 = "REDIRECT_HTTP_RESPONSE_CODE_307"

class URLMapSecurityLevelEnum(str, Enum):
    SECURE_UNSPECIFIED = "SECURE_UNSPECIFIED"
    SECURE_DEFAULT = "SECURE_DEFAULT"
    SECURE_NEVER = "SECURE_NEVER"
    SECURE_OPTIONAL = "SECURE_OPTIONAL"
    SECURE_ALWAYS = "SECURE_ALWAYS"


@dataclass_json
@dataclass
class URLMap:
    api_endpoint: Optional[apiendpointhandler.APIEndpointHandler] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiEndpoint' }})
    auth_fail_action: Optional[URLMapAuthFailActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authFailAction' }})
    login: Optional[URLMapLoginEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login' }})
    redirect_http_response_code: Optional[URLMapRedirectHTTPResponseCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectHttpResponseCode' }})
    script: Optional[scripthandler.ScriptHandler] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    security_level: Optional[URLMapSecurityLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityLevel' }})
    static_files: Optional[staticfileshandler.StaticFilesHandler] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staticFiles' }})
    url_regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlRegex' }})
    
