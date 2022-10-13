from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AdultContentDetectionRequestBody:
    api_key: str = field(default=None, metadata={'form': { 'field_name': 'api_key' }})
    text: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclass
class AdultContentDetectionRequest:
    request: Optional[AdultContentDetectionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class AdultContentDetectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
