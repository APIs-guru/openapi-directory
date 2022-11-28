from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteItvPurchasePlatformPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteItvPurchasePlatformQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteItvPurchasePlatformSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteItvPurchasePlatformRequest:
    path_params: DeleteItvPurchasePlatformPathParams = field()
    query_params: DeleteItvPurchasePlatformQueryParams = field()
    request: shared.ItvCancelSubscriptionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: DeleteItvPurchasePlatformSecurity = field()
    

@dataclass
class DeleteItvPurchasePlatformResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
