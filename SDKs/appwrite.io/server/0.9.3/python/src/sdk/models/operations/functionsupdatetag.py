from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class FunctionsUpdateTagPathParams:
    function_id: str = field(metadata={'path_param': { 'field_name': 'functionId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class FunctionsUpdateTagRequestBody:
    tag: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    

@dataclass
class FunctionsUpdateTagSecurity:
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FunctionsUpdateTagRequest:
    path_params: FunctionsUpdateTagPathParams = field()
    security: FunctionsUpdateTagSecurity = field()
    request: Optional[FunctionsUpdateTagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class FunctionsUpdateTagResponse:
    content_type: str = field()
    status_code: int = field()
    function: Optional[shared.Function] = field(default=None)
    
