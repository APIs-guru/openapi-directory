from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUUIDQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUUIDSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUUIDRequest:
    query_params: GetUUIDQueryParams = field(default=None)
    security: GetUUIDSecurity = field(default=None)
    

@dataclass
class GetUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
