from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class UpdatePluginRequestBody1:
    npm_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('npmName') }})
    

@dataclass_json
@dataclass
class UpdatePluginRequestBody2:
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    

@dataclass
class UpdatePluginSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePluginRequest:
    security: UpdatePluginSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePluginResponse:
    content_type: str = field()
    status_code: int = field()
    
