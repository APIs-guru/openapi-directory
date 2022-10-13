from dataclasses import dataclass, field



@dataclass
class PinTopicPathParams:
    topic_id: str = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PinTopicRequestBody:
    position: float = field(default=None, metadata={'form': { 'field_name': 'position' }})
    

@dataclass
class PinTopicSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PinTopicRequest:
    path_params: PinTopicPathParams = field(default=None)
    request: PinTopicRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: PinTopicSecurity = field(default=None)
    

@dataclass
class PinTopicResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
