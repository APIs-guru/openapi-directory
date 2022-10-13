from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PaymentAPISupportedHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class PaymentAPISupportedRequest:
    headers: PaymentAPISupportedHeaders = field(default=None)
    

@dataclass
class PaymentAPISupportedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    payment_gateway_details_api_models: Optional[List[shared.PaymentGatewayDetailsAPIModel]] = field(default=None)
    status_code: int = field(default=None)
    
