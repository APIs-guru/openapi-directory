from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRecordActionTrailsRequest:
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRecordActionTrailsResponse:
    content_type: str = field()
    status_code: int = field()
    
