from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetPostsThreadedPagedPathParams:
    get_parent_post: bool = field(default=None, metadata={'path_param': { 'field_name': 'getParentPost', 'style': 'simple', 'explode': False }})
    page: int = field(default=None, metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    page_size: int = field(default=None, metadata={'path_param': { 'field_name': 'pageSize', 'style': 'simple', 'explode': False }})
    parent_post_id: int = field(default=None, metadata={'path_param': { 'field_name': 'parentPostId', 'style': 'simple', 'explode': False }})
    reply_size: int = field(default=None, metadata={'path_param': { 'field_name': 'replySize', 'style': 'simple', 'explode': False }})
    root_thread_mode: bool = field(default=None, metadata={'path_param': { 'field_name': 'rootThreadMode', 'style': 'simple', 'explode': False }})
    sort_mode: int = field(default=None, metadata={'path_param': { 'field_name': 'sortMode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPostsThreadedPagedQueryParams:
    showbanned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showbanned', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetPostsThreadedPagedRequest:
    path_params: ForumGetPostsThreadedPagedPathParams = field(default=None)
    query_params: ForumGetPostsThreadedPagedQueryParams = field(default=None)
    

@dataclass
class ForumGetPostsThreadedPagedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
