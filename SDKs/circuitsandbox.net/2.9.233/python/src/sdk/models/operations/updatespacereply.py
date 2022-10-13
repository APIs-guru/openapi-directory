from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class UpdateSpaceReplyPathParams:
    reply_id: str = field(default=None, metadata={'path_param': { 'field_name': 'replyId', 'style': 'simple', 'explode': False }})
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSpaceReplyRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    complex: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'complex' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    mentioned_users: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'mentionedUsers' }})
    

@dataclass
class UpdateSpaceReplySecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSpaceReplyRequest:
    path_params: UpdateSpaceReplyPathParams = field(default=None)
    request: Optional[UpdateSpaceReplyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSpaceReplySecurity = field(default=None)
    

@dataclass
class UpdateSpaceReplyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_reply: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
