from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TextExtractionRequestBody:
    api_key: str = field(metadata={'form': { 'field_name': 'api_key' }})
    text: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclass
class TextExtractionRequest:
    request: Optional[TextExtractionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class TextExtractionResponse:
    content_type: str = field()
    status_code: int = field()
    
