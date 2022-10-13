from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateSpaceTopicPathParams:
    space_id: str = field(default=None, metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSpaceTopicRequestBody:
    attachments: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'attachments' }})
    complex: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'complex' }})
    content: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'content' }})
    content_tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'contentTags' }})
    form_meta_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'formMetaData' }})
    mentioned_user: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'mentionedUser' }})
    subject: str = field(default=None, metadata={'form': { 'field_name': 'subject' }})
    tags: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'tags' }})
    

@dataclass
class CreateSpaceTopicSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateSpaceTopicRequest:
    path_params: CreateSpaceTopicPathParams = field(default=None)
    request: CreateSpaceTopicRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSpaceTopicSecurity = field(default=None)
    

@dataclass
class CreateSpaceTopicResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_topic: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
