from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetCommitCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetCommitCommentRequest:
    path_params: ReposGetCommitCommentPathParams = field()
    

@dataclass
class ReposGetCommitCommentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    commit_comment: Optional[shared.CommitComment] = field(default=None)
    
