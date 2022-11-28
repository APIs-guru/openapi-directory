from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GistsUpdatePathParams:
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GistsUpdateRequestBodyFiles:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    

@dataclass_json
@dataclass
class GistsUpdateRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    files: Optional[dict[str, GistsUpdateRequestBodyFiles]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    

@dataclass
class GistsUpdateRequest:
    path_params: GistsUpdatePathParams = field()
    request: Optional[GistsUpdateRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GistsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_simple: Optional[shared.GistSimple] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
