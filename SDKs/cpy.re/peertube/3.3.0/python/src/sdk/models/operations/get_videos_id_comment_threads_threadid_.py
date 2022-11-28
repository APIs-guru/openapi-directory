from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetVideosIDCommentThreadsThreadIDPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    thread_id: int = field(metadata={'path_param': { 'field_name': 'threadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosIDCommentThreadsThreadIDRequest:
    path_params: GetVideosIDCommentThreadsThreadIDPathParams = field()
    

@dataclass
class GetVideosIDCommentThreadsThreadIDResponse:
    content_type: str = field()
    status_code: int = field()
    video_comment_thread_tree: Optional[Any] = field(default=None)
    
