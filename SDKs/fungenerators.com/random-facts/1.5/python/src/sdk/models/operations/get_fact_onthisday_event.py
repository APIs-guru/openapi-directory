from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFactOnthisdayEventQueryParams:
    day: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'day', 'style': 'form', 'explode': True }})
    month: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'month', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFactOnthisdayEventSecurity:
    x_fungenerators_api_secret: shared.SchemeXFungeneratorsAPISecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetFactOnthisdayEventRequest:
    query_params: GetFactOnthisdayEventQueryParams = field()
    security: GetFactOnthisdayEventSecurity = field()
    

@dataclass
class GetFactOnthisdayEventResponse:
    content_type: str = field()
    status_code: int = field()
    
