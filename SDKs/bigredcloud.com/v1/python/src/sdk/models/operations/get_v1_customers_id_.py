from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1CustomersIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1CustomersIDQueryParams:
    need_balance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'needBalance', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1CustomersIDRequest:
    path_params: GetV1CustomersIDPathParams = field()
    query_params: GetV1CustomersIDQueryParams = field()
    

@dataclass
class GetV1CustomersIDResponse:
    content_type: str = field()
    status_code: int = field()
    customer_dto: Optional[shared.CustomerDto] = field(default=None)
    
