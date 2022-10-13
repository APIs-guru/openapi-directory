from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFactFodQueryParams:
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactFodSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactFodRequest:
    query_params: GetFactFodQueryParams = field(default=None)
    security: GetFactFodSecurity = field(default=None)
    

@dataclass
class GetFactFodResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
