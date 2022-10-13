from dataclasses import dataclass, field
from typing import Optional


@dataclass
class KeywordExtractionRequestBody:
    api_key: str = field(default=None, metadata={'form': { 'field_name': 'api_key' }})
    n: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'n' }})
    text: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclass
class KeywordExtractionRequest:
    request: Optional[KeywordExtractionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class KeywordExtractionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
