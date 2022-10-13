from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideosIDCommentThreadsThreadIDPathParams:
    id: Any = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    thread_id: int = field(default=None, metadata={'path_param': { 'field_name': 'threadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosIDCommentThreadsThreadIDRequest:
    path_params: GetVideosIDCommentThreadsThreadIDPathParams = field(default=None)
    

@dataclass
class GetVideosIDCommentThreadsThreadIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_comment_thread_tree: Optional[Any] = field(default=None)
    
