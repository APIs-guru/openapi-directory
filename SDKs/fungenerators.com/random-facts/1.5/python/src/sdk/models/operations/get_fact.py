from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFactQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactRequest:
    query_params: GetFactQueryParams = field(default=None)
    security: GetFactSecurity = field(default=None)
    

@dataclass
class GetFactResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
