from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PullsCreateReviewCommentAlternativePathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    pull_number: int = field(default=None, metadata={'path_param': { 'field_name': 'pull_number', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PullsCreateReviewCommentAlternativeRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    in_reply_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_reply_to' }})
    

@dataclass
class PullsCreateReviewCommentAlternativeRequest:
    path_params: PullsCreateReviewCommentAlternativePathParams = field(default=None)
    request: Optional[PullsCreateReviewCommentAlternativeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PullsCreateReviewCommentAlternativeResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    legacy_review_comment: Optional[shared.LegacyReviewComment] = field(default=None)
    
