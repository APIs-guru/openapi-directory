from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetFollowingRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGetFollowingResponse:
    content_type: str = field()
    status_code: int = field()
    
