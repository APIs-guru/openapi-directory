from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostFileCommentsRequestBody:
    body: str = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    path: str = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    

@dataclass
class PostFileCommentsRequest:
    request: PostFileCommentsRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostFileCommentsResponse:
    content_type: str = field(default=None)
    file_comment_entity: Optional[shared.FileCommentEntity] = field(default=None)
    status_code: int = field(default=None)
    
