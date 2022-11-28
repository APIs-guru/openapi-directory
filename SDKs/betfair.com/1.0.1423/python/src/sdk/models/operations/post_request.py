from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostRequestRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRequestResponse:
    content_type: str = field()
    status_code: int = field()
    all_response_types_example: Optional[Any] = field(default=None)
    
