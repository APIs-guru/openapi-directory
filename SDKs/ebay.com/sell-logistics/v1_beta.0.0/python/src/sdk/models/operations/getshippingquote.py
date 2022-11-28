from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShippingQuotePathParams:
    shipping_quote_id: str = field(metadata={'path_param': { 'field_name': 'shippingQuoteId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShippingQuoteSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShippingQuoteRequest:
    path_params: GetShippingQuotePathParams = field()
    security: GetShippingQuoteSecurity = field()
    

@dataclass
class GetShippingQuoteResponse:
    content_type: str = field()
    status_code: int = field()
    shipping_quote: Optional[shared.ShippingQuote] = field(default=None)
    
