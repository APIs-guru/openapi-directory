from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrderAPIDetailsQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class OrderAPIDetailsHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrderAPIDetailsRequest:
    query_params: OrderAPIDetailsQueryParams = field(default=None)
    headers: OrderAPIDetailsHeaders = field(default=None)
    

@dataclass
class OrderAPIDetailsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    order_full_details_api_model: Optional[shared.OrderFullDetailsAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
