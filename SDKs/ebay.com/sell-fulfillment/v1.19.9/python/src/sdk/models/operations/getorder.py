from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrderPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrderQueryParams:
    field_groups: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fieldGroups', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrderSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOrderRequest:
    path_params: GetOrderPathParams = field()
    query_params: GetOrderQueryParams = field()
    security: GetOrderSecurity = field()
    

@dataclass
class GetOrderResponse:
    content_type: str = field()
    status_code: int = field()
    order: Optional[shared.Order] = field(default=None)
    
