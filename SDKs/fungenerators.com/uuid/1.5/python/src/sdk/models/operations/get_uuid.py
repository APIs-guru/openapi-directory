from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUUIDQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUUIDSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUUIDRequest:
    query_params: GetUUIDQueryParams = field()
    security: GetUUIDSecurity = field()
    

@dataclass
class GetUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
