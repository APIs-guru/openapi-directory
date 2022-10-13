from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdatePaymentIntentStrongPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentIntentStrongQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdatePaymentIntentStrongSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdatePaymentIntentStrongRequest:
    path_params: UpdatePaymentIntentStrongPathParams = field(default=None)
    query_params: UpdatePaymentIntentStrongQueryParams = field(default=None)
    request: shared.ItvUpdateIntentStrongRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePaymentIntentStrongSecurity = field(default=None)
    

@dataclass
class UpdatePaymentIntentStrongResponse:
    content_type: str = field(default=None)
    itv_update_intent_strong_response: Optional[shared.ItvUpdateIntentStrongResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
