from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateReplyPathParams:
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateReplyRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    complex: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'complex' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    mentioned_user: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'mentionedUser' }})
    

@dataclass
class CreateReplySecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateReplyRequest:
    path_params: CreateReplyPathParams = field(default=None)
    request: Optional[CreateReplyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateReplySecurity = field(default=None)
    

@dataclass
class CreateReplyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_reply: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
