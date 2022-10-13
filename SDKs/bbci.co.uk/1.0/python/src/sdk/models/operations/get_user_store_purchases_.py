from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserStorePurchasesQueryParams:
    identity_cookie: float = field(default=None, metadata={'query_param': { 'field_name': 'identity_cookie', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserStorePurchasesSecurity:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUserStorePurchasesRequest:
    query_params: GetUserStorePurchasesQueryParams = field(default=None)
    security: GetUserStorePurchasesSecurity = field(default=None)
    

@dataclass
class GetUserStorePurchasesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
