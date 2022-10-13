from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class UpdateTopicTagsPathParams:
    topic_id: str = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTopicTagsRequestBody:
    tags: List[str] = field(default=None, metadata={'form': { 'field_name': 'tags' }})
    

@dataclass
class UpdateTopicTagsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateTopicTagsRequest:
    path_params: UpdateTopicTagsPathParams = field(default=None)
    request: UpdateTopicTagsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTopicTagsSecurity = field(default=None)
    

@dataclass
class UpdateTopicTagsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_topic: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
