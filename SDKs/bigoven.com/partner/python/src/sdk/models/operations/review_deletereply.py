from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReviewDeleteReplyPathParams:
    reply_id: str = field(metadata={'path_param': { 'field_name': 'replyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewDeleteReplyRequest:
    path_params: ReviewDeleteReplyPathParams = field()
    

@dataclass
class ReviewDeleteReplyResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
