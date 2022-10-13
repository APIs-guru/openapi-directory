from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductOrderUboRequestBody:
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'callbackUrl' }})
    credits: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'credits' }})
    include_docs: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'includeDocs' }})
    levels: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'levels' }})
    strategy: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'strategy' }})
    subject_id: str = field(default=None, metadata={'form': { 'field_name': 'subjectId' }})
    

@dataclass
class ProductOrderUboSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductOrderUboRequest:
    request: Optional[ProductOrderUboRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: ProductOrderUboSecurity = field(default=None)
    

@dataclass
class ProductOrderUboResponse:
    content_type: str = field(default=None)
    product_order_ubo_200_application_json_any: Optional[Any] = field(default=None)
    product_order_ubo_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
