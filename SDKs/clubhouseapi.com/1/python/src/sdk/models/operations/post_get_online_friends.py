from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetOnlineFriendsRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGetOnlineFriendsResponse:
    content_type: str = field()
    status_code: int = field()
    
