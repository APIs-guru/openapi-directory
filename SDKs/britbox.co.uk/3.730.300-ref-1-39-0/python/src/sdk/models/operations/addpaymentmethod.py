from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class AddPaymentMethodQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class AddPaymentMethodSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddPaymentMethodRequest:
    query_params: AddPaymentMethodQueryParams = field(default=None)
    request: shared.AddPaymentMethodRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AddPaymentMethodSecurity = field(default=None)
    

@dataclass
class AddPaymentMethodResponse:
    content_type: str = field(default=None)
    payment_method: Optional[shared.PaymentMethod] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
