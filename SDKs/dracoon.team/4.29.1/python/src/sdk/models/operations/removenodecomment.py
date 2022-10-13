from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveNodeCommentPathParams:
    comment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveNodeCommentHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class RemoveNodeCommentRequest:
    path_params: RemoveNodeCommentPathParams = field(default=None)
    headers: RemoveNodeCommentHeaders = field(default=None)
    

@dataclass
class RemoveNodeCommentResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
