from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateReplyPathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateReplyRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    complex: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'complex' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    mentioned_user: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'mentionedUser' }})
    

@dataclass
class CreateReplySecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateReplyRequest:
    path_params: CreateReplyPathParams = field()
    security: CreateReplySecurity = field()
    request: Optional[CreateReplyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CreateReplyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_reply: Optional[Any] = field(default=None)
    
