from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReadabilityAssessmentRequestBody:
    api_key: str = field(metadata={'form': { 'field_name': 'api_key' }})
    text: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclass
class ReadabilityAssessmentRequest:
    request: Optional[ReadabilityAssessmentRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ReadabilityAssessmentResponse:
    content_type: str = field()
    status_code: int = field()
    
