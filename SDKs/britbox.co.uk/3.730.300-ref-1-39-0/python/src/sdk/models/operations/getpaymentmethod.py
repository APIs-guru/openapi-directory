from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPaymentMethodPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentMethodQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentMethodSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentMethodRequest:
    path_params: GetPaymentMethodPathParams = field()
    query_params: GetPaymentMethodQueryParams = field()
    security: GetPaymentMethodSecurity = field()
    

@dataclass
class GetPaymentMethodResponse:
    content_type: str = field()
    status_code: int = field()
    payment_method: Optional[shared.PaymentMethod] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
