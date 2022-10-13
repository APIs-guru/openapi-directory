from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class SessionSettings:
    auto_redirect: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_redirect' }})
    hide_resource_settings: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hide_resource_settings' }})
    isolation_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isolation_mode' }})
    sandbox_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sandbox_mode' }})
    session_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_length' }})
    show_logs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_logs' }})
    show_suggestions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_suggestions' }})
    unified_apis: Optional[List[shared.UnifiedAPIIDEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unified_apis' }})
    

@dataclass_json
@dataclass
class SessionTheme:
    favicon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'favicon' }})
    primary_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_color' }})
    privacy_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy_url' }})
    sidepanel_background_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sidepanel_background_color' }})
    sidepanel_text_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sidepanel_text_color' }})
    terms_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'terms_url' }})
    vault_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vault_name' }})
    

@dataclass_json
@dataclass
class Session:
    consumer_metadata: Optional[shared.ConsumerMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumer_metadata' }})
    custom_consumer_settings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_consumer_settings' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_uri' }})
    settings: Optional[SessionSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    theme: Optional[SessionTheme] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    
