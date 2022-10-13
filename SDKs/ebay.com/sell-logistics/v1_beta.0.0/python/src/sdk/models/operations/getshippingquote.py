from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShippingQuotePathParams:
    shipping_quote_id: str = field(default=None, metadata={'path_param': { 'field_name': 'shippingQuoteId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShippingQuoteSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShippingQuoteRequest:
    path_params: GetShippingQuotePathParams = field(default=None)
    security: GetShippingQuoteSecurity = field(default=None)
    

@dataclass
class GetShippingQuoteResponse:
    content_type: str = field(default=None)
    shipping_quote: Optional[shared.ShippingQuote] = field(default=None)
    status_code: int = field(default=None)
    
