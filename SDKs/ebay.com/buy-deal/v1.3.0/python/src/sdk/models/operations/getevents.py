from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = field(default=None)
    headers: GetEventsHeaders = field(default=None)
    security: GetEventsSecurity = field(default=None)
    

@dataclass
class GetEventsResponse:
    content_type: str = field(default=None)
    event_search_response: Optional[shared.EventSearchResponse] = field(default=None)
    status_code: int = field(default=None)
    
