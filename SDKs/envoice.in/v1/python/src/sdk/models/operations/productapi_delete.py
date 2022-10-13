from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductAPIDeleteHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class ProductAPIDeleteRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    product_delete_api_model: Optional[shared.ProductDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    product_delete_api_model1: Optional[shared.ProductDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    product_delete_api_model2: Optional[shared.ProductDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ProductAPIDeleteRequest:
    headers: ProductAPIDeleteHeaders = field(default=None)
    request: ProductAPIDeleteRequests = field(default=None)
    

@dataclass
class ProductAPIDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    product_api_delete_200_application_json_int32_integer: Optional[int] = field(default=None)
    product_api_delete_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
