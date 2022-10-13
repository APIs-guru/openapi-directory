from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReviewDeleteReplyPathParams:
    reply_id: str = field(default=None, metadata={'path_param': { 'field_name': 'replyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewDeleteReplyRequest:
    path_params: ReviewDeleteReplyPathParams = field(default=None)
    

@dataclass
class ReviewDeleteReplyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
