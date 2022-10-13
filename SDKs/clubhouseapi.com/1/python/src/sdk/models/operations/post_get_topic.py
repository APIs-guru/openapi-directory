from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetTopicRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGetTopicResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
