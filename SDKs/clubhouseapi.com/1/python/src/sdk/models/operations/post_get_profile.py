from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetProfileRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGetProfileResponse:
    content_type: str = field()
    status_code: int = field()
    
