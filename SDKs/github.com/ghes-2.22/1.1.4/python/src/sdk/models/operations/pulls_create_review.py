from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PullsCreateReviewPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsCreateReviewRequestBodyComments:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    side: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'side' }})
    start_line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_line' }})
    start_side: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_side' }})
    
class PullsCreateReviewRequestBodyEventEnum(str, Enum):
    APPROVE = "APPROVE"
    REQUEST_CHANGES = "REQUEST_CHANGES"
    COMMENT = "COMMENT"


@dataclass_json
@dataclass
class PullsCreateReviewRequestBody:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    comments: Optional[List[PullsCreateReviewRequestBodyComments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    commit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commit_id' }})
    event: Optional[PullsCreateReviewRequestBodyEventEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    

@dataclass
class PullsCreateReviewRequest:
    path_params: PullsCreateReviewPathParams = field(default=None)
    request: Optional[PullsCreateReviewRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsCreateReviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    pull_request_review: Optional[shared.PullRequestReview] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
