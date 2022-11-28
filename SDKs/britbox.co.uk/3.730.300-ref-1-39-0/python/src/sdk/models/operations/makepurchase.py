from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class MakePurchaseQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class MakePurchaseSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MakePurchaseRequest:
    query_params: MakePurchaseQueryParams = field()
    request: shared.PurchaseRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: MakePurchaseSecurity = field()
    

@dataclass
class MakePurchaseResponse:
    content_type: str = field()
    status_code: int = field()
    entitlement: Optional[shared.Entitlement] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
