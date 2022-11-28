from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateFromShippingQuoteSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFromShippingQuoteRequest:
    request: shared.CreateShipmentFromQuoteRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFromShippingQuoteSecurity = field()
    

@dataclass
class CreateFromShippingQuoteResponse:
    content_type: str = field()
    status_code: int = field()
    shipment: Optional[shared.Shipment] = field(default=None)
    
