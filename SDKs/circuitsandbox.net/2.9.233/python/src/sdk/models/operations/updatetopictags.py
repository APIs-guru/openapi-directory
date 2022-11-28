from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class UpdateTopicTagsPathParams:
    topic_id: str = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTopicTagsRequestBody:
    tags: List[str] = field(metadata={'form': { 'field_name': 'tags' }})
    

@dataclass
class UpdateTopicTagsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateTopicTagsRequest:
    path_params: UpdateTopicTagsPathParams = field()
    request: UpdateTopicTagsRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTopicTagsSecurity = field()
    

@dataclass
class UpdateTopicTagsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_topic: Optional[Any] = field(default=None)
    
