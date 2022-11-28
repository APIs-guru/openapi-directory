from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReactionsCreateForPullRequestReviewCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum(str, Enum):
    PLUS_1 = "+1"
    MINUS_1 = "-1"
    LAUGH = "laugh"
    CONFUSED = "confused"
    HEART = "heart"
    HOORAY = "hooray"
    ROCKET = "rocket"
    EYES = "eyes"


@dataclass_json
@dataclass
class ReactionsCreateForPullRequestReviewCommentRequestBody:
    content: ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    

@dataclass_json
@dataclass
class ReactionsCreateForPullRequestReviewComment415ApplicationJSON:
    documentation_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ReactionsCreateForPullRequestReviewCommentRequest:
    path_params: ReactionsCreateForPullRequestReviewCommentPathParams = field()
    request: Optional[ReactionsCreateForPullRequestReviewCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReactionsCreateForPullRequestReviewCommentResponse:
    content_type: str = field()
    status_code: int = field()
    reaction: Optional[shared.Reaction] = field(default=None)
    reactions_create_for_pull_request_review_comment_415_application_json_object: Optional[ReactionsCreateForPullRequestReviewComment415ApplicationJSON] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
