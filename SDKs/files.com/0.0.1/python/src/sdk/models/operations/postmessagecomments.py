from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMessageCommentsRequestBody:
    body: str = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostMessageCommentsRequest:
    request: Optional[PostMessageCommentsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostMessageCommentsResponse:
    content_type: str = field(default=None)
    message_comment_entity: Optional[shared.MessageCommentEntity] = field(default=None)
    status_code: int = field(default=None)
    
