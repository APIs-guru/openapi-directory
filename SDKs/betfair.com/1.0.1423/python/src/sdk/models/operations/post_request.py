from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRequestRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRequestResponse:
    all_response_types_example: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
