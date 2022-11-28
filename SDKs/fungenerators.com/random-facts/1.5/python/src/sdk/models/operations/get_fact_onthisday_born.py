from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFactOnthisdayBornQueryParams:
    day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'day', 'style': 'form', 'explode': True }})
    month: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactOnthisdayBornSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactOnthisdayBornRequest:
    query_params: GetFactOnthisdayBornQueryParams = field()
    security: GetFactOnthisdayBornSecurity = field()
    

@dataclass
class GetFactOnthisdayBornResponse:
    content_type: str = field()
    status_code: int = field()
    
