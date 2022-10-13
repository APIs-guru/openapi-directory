from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePaymentMethodStrongPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentMethodStrongQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdatePaymentMethodStrongSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePaymentMethodStrongRequest:
    path_params: UpdatePaymentMethodStrongPathParams = field(default=None)
    query_params: UpdatePaymentMethodStrongQueryParams = field(default=None)
    request: shared.ItvUpdatePaymentStrongRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePaymentMethodStrongSecurity = field(default=None)
    

@dataclass
class UpdatePaymentMethodStrongResponse:
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
