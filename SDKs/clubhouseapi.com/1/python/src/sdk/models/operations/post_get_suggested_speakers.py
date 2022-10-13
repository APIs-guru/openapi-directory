from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostGetSuggestedSpeakersRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostGetSuggestedSpeakersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
