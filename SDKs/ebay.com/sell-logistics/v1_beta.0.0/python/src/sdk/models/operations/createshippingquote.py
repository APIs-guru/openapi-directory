from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateShippingQuoteSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateShippingQuoteRequest:
    request: shared.ShippingQuoteRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateShippingQuoteSecurity = field(default=None)
    

@dataclass
class CreateShippingQuoteResponse:
    content_type: str = field(default=None)
    shipping_quote: Optional[shared.ShippingQuote] = field(default=None)
    status_code: int = field(default=None)
    
