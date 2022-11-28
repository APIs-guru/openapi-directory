from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductOrderWithOptionPathParams:
    option: str = field(metadata={'path_param': { 'field_name': 'option', 'style': 'simple', 'explode': False }})
    sku: str = field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    subject_id: str = field(metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductOrderWithOptionSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductOrderWithOptionRequest:
    path_params: ProductOrderWithOptionPathParams = field()
    security: ProductOrderWithOptionSecurity = field()
    

@dataclass
class ProductOrderWithOptionResponse:
    content_type: str = field()
    status_code: int = field()
    product_order_with_option_200_application_json_any: Optional[Any] = field(default=None)
    product_order_with_option_default_application_json_any: Optional[Any] = field(default=None)
    
