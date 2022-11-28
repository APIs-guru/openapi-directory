from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UninstallPluginRequestBody:
    npm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('npmName') }})
    

@dataclass
class UninstallPluginSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UninstallPluginRequest:
    security: UninstallPluginSecurity = field()
    request: Optional[UninstallPluginRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UninstallPluginResponse:
    content_type: str = field()
    status_code: int = field()
    
