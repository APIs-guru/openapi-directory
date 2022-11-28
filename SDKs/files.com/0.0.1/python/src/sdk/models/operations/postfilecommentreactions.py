from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFileCommentReactionsRequestBody:
    emoji: str = field(metadata={'multipart_form': { 'field_name': 'emoji' }})
    file_comment_id: int = field(metadata={'multipart_form': { 'field_name': 'file_comment_id' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostFileCommentReactionsRequest:
    request: Optional[PostFileCommentReactionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostFileCommentReactionsResponse:
    content_type: str = field()
    status_code: int = field()
    file_comment_reaction_entity: Optional[shared.FileCommentReactionEntity] = field(default=None)
    
