from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateShippingQuoteSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateShippingQuoteRequest:
    request: shared.ShippingQuoteRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateShippingQuoteSecurity = field()
    

@dataclass
class CreateShippingQuoteResponse:
    content_type: str = field()
    status_code: int = field()
    shipping_quote: Optional[shared.ShippingQuote] = field(default=None)
    
