from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMessageCommentReactionsRequestBody:
    emoji: str = field(default=None, metadata={'multipart_form': { 'field_name': 'emoji' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostMessageCommentReactionsRequest:
    request: Optional[PostMessageCommentReactionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostMessageCommentReactionsResponse:
    content_type: str = field(default=None)
    message_comment_reaction_entity: Optional[shared.MessageCommentReactionEntity] = field(default=None)
    status_code: int = field(default=None)
    
