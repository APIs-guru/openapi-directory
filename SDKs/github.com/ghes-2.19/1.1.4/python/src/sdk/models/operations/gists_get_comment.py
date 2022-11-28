from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GistsGetCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    gist_id: str = field(metadata={'path_param': { 'field_name': 'gist_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GistsGetComment403ApplicationJSONBlock:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclass
class GistsGetComment403ApplicationJSON:
    block: Optional[GistsGetComment403ApplicationJSONBlock] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block') }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GistsGetCommentRequest:
    path_params: GistsGetCommentPathParams = field()
    

@dataclass
class GistsGetCommentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    gist_comment: Optional[shared.GistComment] = field(default=None)
    gists_get_comment_403_application_json_object: Optional[GistsGetComment403ApplicationJSON] = field(default=None)
    
