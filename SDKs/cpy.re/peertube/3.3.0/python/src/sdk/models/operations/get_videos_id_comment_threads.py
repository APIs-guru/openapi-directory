from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetVideosIDCommentThreadsPathParams:
    id: Any = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideosIDCommentThreadsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[shared.CommentsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVideosIDCommentThreadsRequest:
    path_params: GetVideosIDCommentThreadsPathParams = field()
    query_params: GetVideosIDCommentThreadsQueryParams = field()
    

@dataclass
class GetVideosIDCommentThreadsResponse:
    content_type: str = field()
    status_code: int = field()
    comment_thread_response: Optional[Any] = field(default=None)
    
