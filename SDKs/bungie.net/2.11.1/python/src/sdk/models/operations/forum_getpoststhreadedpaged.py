from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetPostsThreadedPagedPathParams:
    get_parent_post: bool = field(metadata={'path_param': { 'field_name': 'getParentPost', 'style': 'simple', 'explode': False }})
    page: int = field(metadata={'path_param': { 'field_name': 'page', 'style': 'simple', 'explode': False }})
    page_size: int = field(metadata={'path_param': { 'field_name': 'pageSize', 'style': 'simple', 'explode': False }})
    parent_post_id: int = field(metadata={'path_param': { 'field_name': 'parentPostId', 'style': 'simple', 'explode': False }})
    reply_size: int = field(metadata={'path_param': { 'field_name': 'replySize', 'style': 'simple', 'explode': False }})
    root_thread_mode: bool = field(metadata={'path_param': { 'field_name': 'rootThreadMode', 'style': 'simple', 'explode': False }})
    sort_mode: int = field(metadata={'path_param': { 'field_name': 'sortMode', 'style': 'simple', 'explode': False }})
    

@dataclass
class ForumGetPostsThreadedPagedQueryParams:
    showbanned: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'showbanned', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetPostsThreadedPagedRequest:
    path_params: ForumGetPostsThreadedPagedPathParams = field()
    query_params: ForumGetPostsThreadedPagedQueryParams = field()
    

@dataclass
class ForumGetPostsThreadedPagedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
