from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEventsRequest:
    headers: GetEventsHeaders = field()
    query_params: GetEventsQueryParams = field()
    security: GetEventsSecurity = field()
    

@dataclass
class GetEventsResponse:
    content_type: str = field()
    status_code: int = field()
    event_search_response: Optional[shared.EventSearchResponse] = field(default=None)
    
