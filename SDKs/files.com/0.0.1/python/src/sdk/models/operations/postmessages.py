from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMessagesRequestBody:
    body: str = field(default=None, metadata={'multipart_form': { 'field_name': 'body' }})
    project_id: int = field(default=None, metadata={'multipart_form': { 'field_name': 'project_id' }})
    subject: str = field(default=None, metadata={'multipart_form': { 'field_name': 'subject' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostMessagesRequest:
    request: Optional[PostMessagesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostMessagesResponse:
    content_type: str = field(default=None)
    message_entity: Optional[shared.MessageEntity] = field(default=None)
    status_code: int = field(default=None)
    
