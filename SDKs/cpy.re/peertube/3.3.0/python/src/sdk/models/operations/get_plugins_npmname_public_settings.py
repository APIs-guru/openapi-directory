from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginsNpmNamePublicSettingsPathParams:
    npm_name: str = field(metadata={'path_param': { 'field_name': 'npmName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginsNpmNamePublicSettingsRequest:
    path_params: GetPluginsNpmNamePublicSettingsPathParams = field()
    

@dataclass
class GetPluginsNpmNamePublicSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_plugins_npm_name_public_settings_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
