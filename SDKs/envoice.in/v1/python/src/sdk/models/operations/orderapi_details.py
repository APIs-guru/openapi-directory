from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrderAPIDetailsQueryParams:
    id: int = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class OrderAPIDetailsHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrderAPIDetailsRequest:
    headers: OrderAPIDetailsHeaders = field()
    query_params: OrderAPIDetailsQueryParams = field()
    

@dataclass
class OrderAPIDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    order_full_details_api_model: Optional[shared.OrderFullDetailsAPIModel] = field(default=None)
    
