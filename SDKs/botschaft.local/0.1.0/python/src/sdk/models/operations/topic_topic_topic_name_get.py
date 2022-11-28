from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TopicTopicTopicNameGetPathParams:
    topic_name: str = field(metadata={'path_param': { 'field_name': 'topic_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class TopicTopicTopicNameGetQueryParams:
    base64_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base64_message', 'style': 'form', 'explode': True }})
    message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    

@dataclass
class TopicTopicTopicNameGetHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class TopicTopicTopicNameGetRequest:
    headers: TopicTopicTopicNameGetHeaders = field()
    path_params: TopicTopicTopicNameGetPathParams = field()
    query_params: TopicTopicTopicNameGetQueryParams = field()
    

@dataclass
class TopicTopicTopicNameGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    topic_topic_topic_name_get_200_application_json_any: Optional[Any] = field(default=None)
    
