from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateFromShippingQuoteSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFromShippingQuoteRequest:
    request: shared.CreateShipmentFromQuoteRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFromShippingQuoteSecurity = field(default=None)
    

@dataclass
class CreateFromShippingQuoteResponse:
    content_type: str = field(default=None)
    shipment: Optional[shared.Shipment] = field(default=None)
    status_code: int = field(default=None)
    
