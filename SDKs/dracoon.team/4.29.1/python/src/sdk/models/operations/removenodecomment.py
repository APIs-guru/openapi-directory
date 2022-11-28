from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveNodeCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveNodeCommentHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveNodeCommentRequest:
    headers: RemoveNodeCommentHeaders = field()
    path_params: RemoveNodeCommentPathParams = field()
    

@dataclass
class RemoveNodeCommentResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
