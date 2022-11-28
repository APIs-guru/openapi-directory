from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AppSessionsByTimeQueryParams:
    app_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    segment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'segment_id', 'style': 'form', 'explode': True }})
    unit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclass
class AppSessionsByTimeRequest:
    query_params: AppSessionsByTimeQueryParams = field()
    

@dataclass
class AppSessionsByTimeResponse:
    content_type: str = field()
    status_code: int = field()
    
