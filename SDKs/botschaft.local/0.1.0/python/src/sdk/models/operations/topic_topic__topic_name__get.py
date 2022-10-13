from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TopicTopicTopicNameGetPathParams:
    topic_name: str = field(default=None, metadata={'path_param': { 'field_name': 'topic_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class TopicTopicTopicNameGetQueryParams:
    base64_message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base64_message', 'style': 'form', 'explode': True }})
    message: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    

@dataclass
class TopicTopicTopicNameGetHeaders:
    authorization: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'authorization' }})
    

@dataclass
class TopicTopicTopicNameGetRequest:
    path_params: TopicTopicTopicNameGetPathParams = field(default=None)
    query_params: TopicTopicTopicNameGetQueryParams = field(default=None)
    headers: TopicTopicTopicNameGetHeaders = field(default=None)
    

@dataclass
class TopicTopicTopicNameGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    topic_topic_topic_name_get_200_application_json_any: Optional[Any] = field(default=None)
    
