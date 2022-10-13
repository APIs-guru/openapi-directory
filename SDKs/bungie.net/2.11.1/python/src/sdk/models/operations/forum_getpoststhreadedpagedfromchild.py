from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetPostsThreadedPagedFromChildPathParams:
    child_post_id: int = field(default=None, metadata={'path_param': { 'field_name': 'childPostId', 'style': 'simple', 'explode': False }})
    page: int = field(default=None, metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    page_size: int = field(default=None, metadata={'path_param': { 'field_name': 'pageSize', 'style': 'simple', 'explode': False }})
    reply_size: int = field(default=None, metadata={'path_param': { 'field_name': 'replySize', 'style': 'simple', 'explode': False }})
    root_thread_mode: bool = field(default=None, metadata={'path_param': { 'field_name': 'rootThreadMode', 'style': 'simple', 'explode': False }})
    sort_mode: int = field(default=None, metadata={'path_param': { 'field_name': 'sortMode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPostsThreadedPagedFromChildQueryParams:
    showbanned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showbanned', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetPostsThreadedPagedFromChildRequest:
    path_params: ForumGetPostsThreadedPagedFromChildPathParams = field(default=None)
    query_params: ForumGetPostsThreadedPagedFromChildQueryParams = field(default=None)
    

@dataclass
class ForumGetPostsThreadedPagedFromChildResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
