from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PinTopicPathParams:
    topic_id: str = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PinTopicRequestBody:
    position: float = field(metadata={'form': { 'field_name': 'position' }})
    

@dataclass
class PinTopicSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PinTopicRequest:
    path_params: PinTopicPathParams = field()
    request: PinTopicRequestBody = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: PinTopicSecurity = field()
    

@dataclass
class PinTopicResponse:
    content_type: str = field()
    status_code: int = field()
    
