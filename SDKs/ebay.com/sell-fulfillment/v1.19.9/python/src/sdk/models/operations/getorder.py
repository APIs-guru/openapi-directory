from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOrderPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrderQueryParams:
    field_groups: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fieldGroups', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrderSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetOrderRequest:
    path_params: GetOrderPathParams = field(default=None)
    query_params: GetOrderQueryParams = field(default=None)
    security: GetOrderSecurity = field(default=None)
    

@dataclass
class GetOrderResponse:
    content_type: str = field(default=None)
    order: Optional[shared.Order] = field(default=None)
    status_code: int = field(default=None)
    
