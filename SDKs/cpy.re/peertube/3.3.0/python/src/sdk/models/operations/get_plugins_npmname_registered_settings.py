from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginsNpmNameRegisteredSettingsPathParams:
    npm_name: str = field(default=None, metadata={'path_param': { 'field_name': 'npmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginsNpmNameRegisteredSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPluginsNpmNameRegisteredSettingsRequest:
    path_params: GetPluginsNpmNameRegisteredSettingsPathParams = field(default=None)
    security: GetPluginsNpmNameRegisteredSettingsSecurity = field(default=None)
    

@dataclass
class GetPluginsNpmNameRegisteredSettingsResponse:
    content_type: str = field(default=None)
    get_plugins_npm_name_registered_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
