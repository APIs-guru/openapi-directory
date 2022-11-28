from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConnectorAuthTypeEnum(str, Enum):
    OAUTH2 = "oauth2"
    API_KEY = "apiKey"
    BASIC = "basic"
    CUSTOM = "custom"
    NONE = "none"

class ConnectorOauthCredentialsSourceEnum(str, Enum):
    INTEGRATION = "integration"
    CONNECTION = "connection"

class ConnectorOauthGrantTypeEnum(str, Enum):
    AUTHORIZATION_CODE = "authorization_code"
    CLIENT_CREDENTIALS = "client_credentials"
    PASSWORD = "password"


@dataclass_json
@dataclass
class ConnectorOauthScopes:
    default_apis: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_apis') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass_json
@dataclass
class ConnectorTLSSupport:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class ConnectorUnifiedApisOauthScopes:
    r"""ConnectorUnifiedApisOauthScopes
    OAuth scopes required for the connector. Add these scopes to your OAuth app.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    

@dataclass_json
@dataclass
class ConnectorUnifiedApis:
    downstream_unsupported_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downstream_unsupported_resources') }})
    id: Optional[UnifiedAPIIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oauth_scopes: Optional[List[ConnectorUnifiedApisOauthScopes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_scopes') }})
    supported_events: Optional[List[ConnectorEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_events') }})
    supported_resources: Optional[List[LinkedConnectorResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_resources') }})
    

@dataclass_json
@dataclass
class Connector:
    auth_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_only') }})
    auth_type: Optional[ConnectorAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_type') }})
    blind_mapped: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blind_mapped') }})
    configurable_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurable_resources') }})
    custom_scopes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_scopes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    docs: Optional[List[ConnectorDoc]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('docs') }})
    free_trial_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('free_trial_available') }})
    has_sandbox_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('has_sandbox_credentials') }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon_url') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    oauth_credentials_source: Optional[ConnectorOauthCredentialsSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_credentials_source') }})
    oauth_grant_type: Optional[ConnectorOauthGrantTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_grant_type') }})
    oauth_scopes: Optional[List[ConnectorOauthScopes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_scopes') }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_id') }})
    settings: Optional[List[ConnectorSetting]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    signup_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signup_url') }})
    status: Optional[ConnectorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    supported_events: Optional[List[ConnectorEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_events') }})
    supported_resources: Optional[List[LinkedConnectorResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supported_resources') }})
    tls_support: Optional[ConnectorTLSSupport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tls_support') }})
    unified_apis: Optional[List[ConnectorUnifiedApis]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unified_apis') }})
    webhook_support: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook_support') }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website_url') }})
    
