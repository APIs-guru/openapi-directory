from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateSpaceReplyPathParams:
    reply_id: str = field(metadata={'path_param': { 'field_name': 'replyId', 'style': 'simple', 'explode': False }})
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSpaceReplyRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    complex: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'complex' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    mentioned_users: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'mentionedUsers' }})
    

@dataclass
class UpdateSpaceReplySecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSpaceReplyRequest:
    path_params: UpdateSpaceReplyPathParams = field()
    security: UpdateSpaceReplySecurity = field()
    request: Optional[UpdateSpaceReplyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateSpaceReplyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_reply: Optional[Any] = field(default=None)
    
