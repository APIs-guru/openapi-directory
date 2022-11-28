from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductOrderUboRequestBody:
    subject_id: str = field(metadata={'form': { 'field_name': 'subjectId' }})
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'callbackUrl' }})
    credits: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'credits' }})
    include_docs: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'includeDocs' }})
    levels: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'levels' }})
    strategy: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'strategy' }})
    

@dataclass
class ProductOrderUboSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductOrderUboRequest:
    security: ProductOrderUboSecurity = field()
    request: Optional[ProductOrderUboRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class ProductOrderUboResponse:
    content_type: str = field()
    status_code: int = field()
    product_order_ubo_200_application_json_any: Optional[Any] = field(default=None)
    product_order_ubo_default_application_json_any: Optional[Any] = field(default=None)
    
