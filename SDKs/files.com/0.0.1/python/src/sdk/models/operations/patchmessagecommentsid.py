from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchMessageCommentsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchMessageCommentsIDRequestBody:
    body: str = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    

@dataclass
class PatchMessageCommentsIDRequest:
    path_params: PatchMessageCommentsIDPathParams = field(default=None)
    request: PatchMessageCommentsIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchMessageCommentsIDResponse:
    content_type: str = field(default=None)
    message_comment_entity: Optional[shared.MessageCommentEntity] = field(default=None)
    status_code: int = field(default=None)
    
