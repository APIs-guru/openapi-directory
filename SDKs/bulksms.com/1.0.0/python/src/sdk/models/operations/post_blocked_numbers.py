from dataclasses import dataclass, field
from typing import List


@dataclass
class PostBlockedNumbersSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostBlockedNumbersRequest:
    request: List[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostBlockedNumbersSecurity = field(default=None)
    

@dataclass
class PostBlockedNumbersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
