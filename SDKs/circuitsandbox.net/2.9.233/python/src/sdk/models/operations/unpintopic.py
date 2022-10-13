from dataclasses import dataclass, field



@dataclass
class UnpinTopicPathParams:
    topic_id: str = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnpinTopicSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnpinTopicRequest:
    path_params: UnpinTopicPathParams = field(default=None)
    security: UnpinTopicSecurity = field(default=None)
    

@dataclass
class UnpinTopicResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
