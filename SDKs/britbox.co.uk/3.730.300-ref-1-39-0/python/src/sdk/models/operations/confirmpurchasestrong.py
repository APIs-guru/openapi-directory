from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfirmPurchaseStrongPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmPurchaseStrongQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfirmPurchaseStrongSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConfirmPurchaseStrongRequest:
    path_params: ConfirmPurchaseStrongPathParams = field(default=None)
    query_params: ConfirmPurchaseStrongQueryParams = field(default=None)
    request: shared.ItvPurchaseStrongRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ConfirmPurchaseStrongSecurity = field(default=None)
    

@dataclass
class ConfirmPurchaseStrongResponse:
    content_type: str = field(default=None)
    itv_purchase_strong_response: Optional[shared.ItvPurchaseStrongResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
