from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CanvasDetailsQueryParams:
    canvas_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'canvas_id', 'style': 'form', 'explode': True }})
    

@dataclass
class CanvasDetailsRequest:
    query_params: CanvasDetailsQueryParams = field()
    

@dataclass
class CanvasDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    
