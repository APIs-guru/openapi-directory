from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetSuggestedFollowsSimilarRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGetSuggestedFollowsSimilarResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
