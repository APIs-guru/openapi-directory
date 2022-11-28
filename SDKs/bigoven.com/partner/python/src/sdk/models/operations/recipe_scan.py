from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RecipeScanQueryParams:
    devicetype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devicetype', 'style': 'form', 'explode': True }})
    lat: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    lng: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'lng', 'style': 'form', 'explode': True }})
    test: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'test', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeScanRequest:
    query_params: RecipeScanQueryParams = field()
    

@dataclass
class RecipeScanResponse:
    content_type: str = field()
    status_code: int = field()
    
