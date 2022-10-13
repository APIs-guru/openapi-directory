from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MediaTabularExtractsheetQueryParams:
    arg1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'arg1', 'style': 'form', 'explode': True }})
    entryid: str = field(default=None, metadata={'query_param': { 'field_name': 'entryid', 'style': 'form', 'explode': True }})
    output: str = field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    

@dataclass
class MediaTabularExtractsheetRequest:
    query_params: MediaTabularExtractsheetQueryParams = field(default=None)
    

@dataclass
class MediaTabularExtractsheetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
