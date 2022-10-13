from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1SuppliersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1SuppliersIDQueryParams:
    need_balance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'needBalance', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1SuppliersIDRequest:
    path_params: GetV1SuppliersIDPathParams = field(default=None)
    query_params: GetV1SuppliersIDQueryParams = field(default=None)
    

@dataclass
class GetV1SuppliersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supplier_dto: Optional[shared.SupplierDto] = field(default=None)
    
