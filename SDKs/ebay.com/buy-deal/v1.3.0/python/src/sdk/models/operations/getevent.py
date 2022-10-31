from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEventPathParams:
    event_id: str = field(default=None, metadata={'path_param': { 'field_name': 'event_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventHeaders:
    x_ebay_c_marketplace_id: str = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEventSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEventRequest:
    path_params: GetEventPathParams = field(default=None)
    headers: GetEventHeaders = field(default=None)
    security: GetEventSecurity = field(default=None)
    

@dataclass
class GetEventResponse:
    content_type: str = field(default=None)
    event: Optional[shared.Event] = field(default=None)
    status_code: int = field(default=None)
    
