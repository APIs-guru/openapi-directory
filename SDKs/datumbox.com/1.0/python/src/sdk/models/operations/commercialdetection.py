from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CommercialDetectionRequestBody:
    api_key: str = field(metadata={'form': { 'field_name': 'api_key' }})
    text: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclass
class CommercialDetectionRequest:
    request: Optional[CommercialDetectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class CommercialDetectionResponse:
    content_type: str = field()
    status_code: int = field()
    
