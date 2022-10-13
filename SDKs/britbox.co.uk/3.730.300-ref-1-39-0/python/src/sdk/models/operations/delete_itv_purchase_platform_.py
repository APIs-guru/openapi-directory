from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteItvPurchasePlatformPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItvPurchasePlatformQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteItvPurchasePlatformSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteItvPurchasePlatformRequest:
    path_params: DeleteItvPurchasePlatformPathParams = field(default=None)
    query_params: DeleteItvPurchasePlatformQueryParams = field(default=None)
    request: shared.ItvCancelSubscriptionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DeleteItvPurchasePlatformSecurity = field(default=None)
    

@dataclass
class DeleteItvPurchasePlatformResponse:
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
