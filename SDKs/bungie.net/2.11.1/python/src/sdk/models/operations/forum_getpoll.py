from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetPollPathParams:
    topic_id: int = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPollRequest:
    path_params: ForumGetPollPathParams = field()
    

@dataclass
class ForumGetPollResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
