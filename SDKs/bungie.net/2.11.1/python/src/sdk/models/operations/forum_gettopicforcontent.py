from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetTopicForContentPathParams:
    content_id: int = field(metadata={'path_param': { 'field_name': 'contentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetTopicForContentRequest:
    path_params: ForumGetTopicForContentPathParams = field()
    

@dataclass
class ForumGetTopicForContentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
