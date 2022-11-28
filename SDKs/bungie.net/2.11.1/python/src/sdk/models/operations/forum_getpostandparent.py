from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetPostAndParentPathParams:
    child_post_id: int = field(metadata={'path_param': { 'field_name': 'childPostId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPostAndParentQueryParams:
    showbanned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showbanned', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetPostAndParentRequest:
    path_params: ForumGetPostAndParentPathParams = field()
    query_params: ForumGetPostAndParentQueryParams = field()
    

@dataclass
class ForumGetPostAndParentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
