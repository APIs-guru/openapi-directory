from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPIInvoiceNewcategoryHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIInvoiceNewcategoryRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    invoice_category_create_api_model: Optional[shared.InvoiceCategoryCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    invoice_category_create_api_model1: Optional[shared.InvoiceCategoryCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    invoice_category_create_api_model2: Optional[shared.InvoiceCategoryCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIInvoiceNewcategoryRequest:
    headers: PostAPIInvoiceNewcategoryHeaders = field()
    request: PostAPIInvoiceNewcategoryRequests = field()
    

@dataclass
class PostAPIInvoiceNewcategoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    invoice_category_api_model: Optional[shared.InvoiceCategoryAPIModel] = field(default=None)
    
