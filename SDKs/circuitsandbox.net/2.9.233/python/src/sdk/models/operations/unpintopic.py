from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnpinTopicPathParams:
    topic_id: str = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnpinTopicSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnpinTopicRequest:
    path_params: UnpinTopicPathParams = field()
    security: UnpinTopicSecurity = field()
    

@dataclass
class UnpinTopicResponse:
    content_type: str = field()
    status_code: int = field()
    
