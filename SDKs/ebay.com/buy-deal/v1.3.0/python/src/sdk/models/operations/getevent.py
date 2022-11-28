from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventPathParams:
    event_id: str = field(metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventHeaders:
    x_ebay_c_marketplace_id: str = field(metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEventRequest:
    headers: GetEventHeaders = field()
    path_params: GetEventPathParams = field()
    security: GetEventSecurity = field()
    

@dataclass
class GetEventResponse:
    content_type: str = field()
    status_code: int = field()
    event: Optional[shared.Event] = field(default=None)
    
