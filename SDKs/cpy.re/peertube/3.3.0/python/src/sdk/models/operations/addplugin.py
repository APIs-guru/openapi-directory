from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class AddPluginRequestBody1:
    npm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('npmName') }})
    

@dataclass_json
@dataclass
class AddPluginRequestBody2:
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass
class AddPluginSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddPluginRequest:
    security: AddPluginSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddPluginResponse:
    content_type: str = field()
    status_code: int = field()
    
