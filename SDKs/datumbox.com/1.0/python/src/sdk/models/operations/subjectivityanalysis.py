from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SubjectivityAnalysisRequestBody:
    api_key: str = field(metadata={'form': { 'field_name': 'api_key' }})
    text: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'text' }})
    

@dataclass
class SubjectivityAnalysisRequest:
    request: Optional[SubjectivityAnalysisRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class SubjectivityAnalysisResponse:
    content_type: str = field()
    status_code: int = field()
    
