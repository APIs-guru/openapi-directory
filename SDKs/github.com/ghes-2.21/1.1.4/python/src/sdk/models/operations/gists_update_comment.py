from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GistsUpdateCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GistsUpdateCommentRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class GistsUpdateCommentRequest:
    path_params: GistsUpdateCommentPathParams = field()
    request: Optional[GistsUpdateCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GistsUpdateCommentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_comment: Optional[shared.GistComment] = field(default=None)
    
