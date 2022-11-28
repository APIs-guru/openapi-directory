from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFactQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactRequest:
    query_params: GetFactQueryParams = field()
    security: GetFactSecurity = field()
    

@dataclass
class GetFactResponse:
    content_type: str = field()
    status_code: int = field()
    
