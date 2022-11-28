from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdateCommitCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposUpdateCommitCommentRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass
class ReposUpdateCommitCommentRequest:
    path_params: ReposUpdateCommitCommentPathParams = field()
    request: Optional[ReposUpdateCommitCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateCommitCommentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    commit_comment: Optional[shared.CommitComment] = field(default=None)
    
