from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MediaTabularExtractsheetQueryParams:
    entryid: str = field(metadata={'query_param': { 'field_name': 'entryid', 'style': 'form', 'explode': True }})
    output: str = field(metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    arg1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'arg1', 'style': 'form', 'explode': True }})
    

@dataclass
class MediaTabularExtractsheetRequest:
    query_params: MediaTabularExtractsheetQueryParams = field()
    

@dataclass
class MediaTabularExtractsheetResponse:
    content_type: str = field()
    status_code: int = field()
    
