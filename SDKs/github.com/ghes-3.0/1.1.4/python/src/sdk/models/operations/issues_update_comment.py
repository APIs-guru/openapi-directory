from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class IssuesUpdateCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class IssuesUpdateCommentRequestBody:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    

@dataclass
class IssuesUpdateCommentRequest:
    path_params: IssuesUpdateCommentPathParams = field(default=None)
    request: Optional[IssuesUpdateCommentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IssuesUpdateCommentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    issue_comment: Optional[shared.IssueComment] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
