from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPaymentMethodsQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentMethodsSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentMethodsRequest:
    query_params: GetPaymentMethodsQueryParams = field()
    security: GetPaymentMethodsSecurity = field()
    

@dataclass
class GetPaymentMethodsResponse:
    content_type: str = field()
    status_code: int = field()
    payment_methods: Optional[List[shared.PaymentMethod]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
