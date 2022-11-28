from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PullsCreateReviewCommentAlternativePathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsCreateReviewCommentAlternativeRequestBody:
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    in_reply_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_reply_to') }})
    

@dataclass
class PullsCreateReviewCommentAlternativeRequest:
    path_params: PullsCreateReviewCommentAlternativePathParams = field()
    request: Optional[PullsCreateReviewCommentAlternativeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsCreateReviewCommentAlternativeResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    legacy_review_comment: Optional[shared.LegacyReviewComment] = field(default=None)
    
