from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostInviteToAppRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostInviteToAppResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
