from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DocumentSimilarityRequestBody:
    api_key: str = field(default=None, metadata={'form': { 'field_name': 'api_key' }})
    copy: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'copy' }})
    original: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'original' }})
    

@dataclass
class DocumentSimilarityRequest:
    request: Optional[DocumentSimilarityRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class DocumentSimilarityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
