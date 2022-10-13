from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutPluginsNpmNameSettingsPathParams:
    npm_name: str = field(default=None, metadata={'path_param': { 'field_name': 'npmName', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutPluginsNpmNameSettingsRequestBody:
    settings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass
class PutPluginsNpmNameSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutPluginsNpmNameSettingsRequest:
    path_params: PutPluginsNpmNameSettingsPathParams = field(default=None)
    request: Optional[PutPluginsNpmNameSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutPluginsNpmNameSettingsSecurity = field(default=None)
    

@dataclass
class PutPluginsNpmNameSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
