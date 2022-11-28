from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPurchasesQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPurchasesSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPurchasesRequest:
    query_params: GetPurchasesQueryParams = field()
    security: GetPurchasesSecurity = field()
    

@dataclass
class GetPurchasesResponse:
    content_type: str = field()
    status_code: int = field()
    purchases: Optional[List[shared.Purchase]] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
