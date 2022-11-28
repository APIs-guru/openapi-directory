from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPluginsNpmNameRegisteredSettingsPathParams:
    npm_name: str = field(metadata={'path_param': { 'field_name': 'npmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginsNpmNameRegisteredSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPluginsNpmNameRegisteredSettingsRequest:
    path_params: GetPluginsNpmNameRegisteredSettingsPathParams = field()
    security: GetPluginsNpmNameRegisteredSettingsSecurity = field()
    

@dataclass
class GetPluginsNpmNameRegisteredSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_plugins_npm_name_registered_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
