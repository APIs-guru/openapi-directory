from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutPluginsNpmNameSettingsPathParams:
    npm_name: str = field(metadata={'path_param': { 'field_name': 'npmName', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutPluginsNpmNameSettingsRequestBody:
    settings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass
class PutPluginsNpmNameSettingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutPluginsNpmNameSettingsRequest:
    path_params: PutPluginsNpmNameSettingsPathParams = field()
    security: PutPluginsNpmNameSettingsSecurity = field()
    request: Optional[PutPluginsNpmNameSettingsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPluginsNpmNameSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    
