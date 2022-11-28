from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUserStorePurchasesQueryParams:
    identity_cookie: float = field(metadata={'query_param': { 'field_name': 'identity_cookie', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserStorePurchasesSecurity:
    basic: shared.SchemeBasic = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUserStorePurchasesRequest:
    query_params: GetUserStorePurchasesQueryParams = field()
    security: GetUserStorePurchasesSecurity = field()
    

@dataclass
class GetUserStorePurchasesResponse:
    content_type: str = field()
    status_code: int = field()
    ibl: Optional[Any] = field(default=None)
    
