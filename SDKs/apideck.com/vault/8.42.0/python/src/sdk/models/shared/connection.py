from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ConnectionConfigurationDefaultsTargetEnum(str, Enum):
    CUSTOM_FIELDS = "custom_fields"
    RESOURCE = "resource"


@dataclass_json
@dataclass
class ConnectionConfigurationDefaults:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    options: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    target: Optional[ConnectionConfigurationDefaultsTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ConnectionConfiguration:
    defaults: Optional[List[ConnectionConfigurationDefaults]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaults' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
class ConnectionStatusEnum(str, Enum):
    LIVE = "live"
    UPCOMING = "upcoming"
    REQUESTED = "requested"


@dataclass_json
@dataclass
class Connection:
    auth_type: Optional[shared.AuthTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_type' }})
    authorize_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorize_url' }})
    configurable_resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurable_resources' }})
    configuration: Optional[List[ConnectionConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration' }})
    created_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    form_fields: Optional[List[shared.FormField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_fields' }})
    has_guide: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'has_guide' }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    metadata: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    oauth_grant_type: Optional[shared.OAuthGrantTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth_grant_type' }})
    resource_schema_support: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_schema_support' }})
    resource_settings_support: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_settings_support' }})
    revoke_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revoke_url' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_id' }})
    settings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    settings_required_for_authorization: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings_required_for_authorization' }})
    state: Optional[shared.ConnectionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[ConnectionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tag_line: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_line' }})
    unified_api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_api' }})
    updated_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
