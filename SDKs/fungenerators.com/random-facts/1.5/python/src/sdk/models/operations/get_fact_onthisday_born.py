from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFactOnthisdayBornQueryParams:
    day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'day', 'style': 'form', 'explode': True }})
    month: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactOnthisdayBornSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactOnthisdayBornRequest:
    query_params: GetFactOnthisdayBornQueryParams = field(default=None)
    security: GetFactOnthisdayBornSecurity = field(default=None)
    

@dataclass
class GetFactOnthisdayBornResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
