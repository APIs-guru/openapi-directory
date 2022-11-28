from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateSpaceTopicPathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSpaceTopicRequestBody:
    subject: str = field(metadata={'form': { 'field_name': 'subject' }})
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    complex: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'complex' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    content_tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'contentTags' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    mentioned_user: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'mentionedUser' }})
    tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'tags' }})
    

@dataclass
class CreateSpaceTopicSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateSpaceTopicRequest:
    path_params: CreateSpaceTopicPathParams = field()
    request: CreateSpaceTopicRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSpaceTopicSecurity = field()
    

@dataclass
class CreateSpaceTopicResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_topic: Optional[Any] = field(default=None)
    
