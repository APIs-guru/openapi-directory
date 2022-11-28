from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductUpdateActionPathParams:
    action: str = field(metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductUpdateActionRequestBody:
    credits: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'credits' }})
    

@dataclass
class ProductUpdateActionSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductUpdateActionRequest:
    path_params: ProductUpdateActionPathParams = field()
    security: ProductUpdateActionSecurity = field()
    request: Optional[ProductUpdateActionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ProductUpdateActionResponse:
    content_type: str = field()
    status_code: int = field()
    product_update_action_200_application_json_any: Optional[Any] = field(default=None)
    product_update_action_default_application_json_any: Optional[Any] = field(default=None)
    
