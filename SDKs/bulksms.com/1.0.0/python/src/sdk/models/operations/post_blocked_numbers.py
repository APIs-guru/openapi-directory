from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class PostBlockedNumbersSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostBlockedNumbersRequest:
    request: List[str] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostBlockedNumbersSecurity = field()
    

@dataclass
class PostBlockedNumbersResponse:
    content_type: str = field()
    status_code: int = field()
    
