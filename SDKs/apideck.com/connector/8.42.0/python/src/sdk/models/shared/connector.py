from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

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


@dataclass_json
@dataclass
class ConnectorOauthScopes:
    default_apis: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_apis' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    

@dataclass_json
@dataclass
class ConnectorSupportedEvents:
    downstream_event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_event_type' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_id' }})
    

@dataclass_json
@dataclass
class ConnectorSupportedResources:
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_id' }})
    downstream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downstream_name' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[shared.ResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class ConnectorUnifiedApisOauthScopes:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    

@dataclass_json
@dataclass
class ConnectorUnifiedApis:
    id: Optional[shared.UnifiedAPIIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    oauth_scopes: Optional[List[ConnectorUnifiedApisOauthScopes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_scopes' }})
    

@dataclass_json
@dataclass
class Connector:
    auth_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_only' }})
    auth_type: Optional[ConnectorAuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_type' }})
    configurable_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurable_resources' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    docs: Optional[List[shared.ConnectorDoc]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'docs' }})
    has_sandbox_credentials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_sandbox_credentials' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_url' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oauth_credentials_source: Optional[ConnectorOauthCredentialsSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_credentials_source' }})
    oauth_grant_type: Optional[ConnectorOauthGrantTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_grant_type' }})
    oauth_scopes: Optional[List[ConnectorOauthScopes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_scopes' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_id' }})
    settings: Optional[List[shared.ConnectorSetting]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    status: Optional[shared.ConnectorStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    supported_events: Optional[List[ConnectorSupportedEvents]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_events' }})
    supported_resources: Optional[List[ConnectorSupportedResources]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supported_resources' }})
    unified_apis: Optional[List[ConnectorUnifiedApis]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_apis' }})
    website_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website_url' }})
    
