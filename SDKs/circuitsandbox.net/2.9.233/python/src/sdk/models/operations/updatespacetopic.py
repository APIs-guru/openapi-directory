from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateSpaceTopicPathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    topic_id: str = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSpaceTopicRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    complex: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'complex' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    content_tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'contentTags' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    mentioned_users: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'mentionedUsers' }})
    subject: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'subject' }})
    tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'tags' }})
    

@dataclass
class UpdateSpaceTopicSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSpaceTopicRequest:
    path_params: UpdateSpaceTopicPathParams = field()
    security: UpdateSpaceTopicSecurity = field()
    request: Optional[UpdateSpaceTopicRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdateSpaceTopicResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_topic: Optional[Any] = field(default=None)
    
