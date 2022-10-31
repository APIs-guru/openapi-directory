from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3OrdersIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3OrdersIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3OrdersIDRequest:
    path_params: GetV3OrdersIDPathParams = field(default=None)
    headers: GetV3OrdersIDHeaders = field(default=None)
    

@dataclass
class GetV3OrdersIDResponse:
    content_type: str = field(default=None)
    order_detail: Optional[shared.OrderDetail] = field(default=None)
    status_code: int = field(default=None)
    
