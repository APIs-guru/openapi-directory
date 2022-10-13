from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetPostAndParentPathParams:
    child_post_id: int = field(default=None, metadata={'path_param': { 'field_name': 'childPostId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPostAndParentQueryParams:
    showbanned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showbanned', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetPostAndParentRequest:
    path_params: ForumGetPostAndParentPathParams = field(default=None)
    query_params: ForumGetPostAndParentQueryParams = field(default=None)
    

@dataclass
class ForumGetPostAndParentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
