from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductOrderWithOptionPathParams:
    option: str = field(default=None, metadata={'path_param': { 'field_name': 'option', 'style': 'simple', 'explode': False }})
    sku: str = field(default=None, metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    subject_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductOrderWithOptionSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductOrderWithOptionRequest:
    path_params: ProductOrderWithOptionPathParams = field(default=None)
    security: ProductOrderWithOptionSecurity = field(default=None)
    

@dataclass
class ProductOrderWithOptionResponse:
    content_type: str = field(default=None)
    product_order_with_option_200_application_json_any: Optional[Any] = field(default=None)
    product_order_with_option_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
