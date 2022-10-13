from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposCreateCommitCommentPathParams:
    commit_sha: str = field(default=None, metadata={'path_param': { 'field_name': 'commit_sha', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class ReposCreateCommitCommentRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    line: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    

@dataclass
class ReposCreateCommitCommentRequest:
    path_params: ReposCreateCommitCommentPathParams = field(default=None)
    request: Optional[ReposCreateCommitCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposCreateCommitCommentResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    commit_comment: Optional[shared.CommitComment] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
