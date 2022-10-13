from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginsNpmNamePublicSettingsPathParams:
    npm_name: str = field(default=None, metadata={'path_param': { 'field_name': 'npmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginsNpmNamePublicSettingsRequest:
    path_params: GetPluginsNpmNamePublicSettingsPathParams = field(default=None)
    

@dataclass
class GetPluginsNpmNamePublicSettingsResponse:
    content_type: str = field(default=None)
    get_plugins_npm_name_public_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
