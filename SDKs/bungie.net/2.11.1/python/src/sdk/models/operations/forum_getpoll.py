from dataclasses import dataclass, field



@dataclass
class ForumGetPollPathParams:
    topic_id: int = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPollRequest:
    path_params: ForumGetPollPathParams = field(default=None)
    

@dataclass
class ForumGetPollResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
