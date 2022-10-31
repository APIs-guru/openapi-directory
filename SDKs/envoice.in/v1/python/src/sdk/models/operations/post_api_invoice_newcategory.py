from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPIInvoiceNewcategoryHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIInvoiceNewcategoryRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    invoice_category_create_api_model: Optional[shared.InvoiceCategoryCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    invoice_category_create_api_model1: Optional[shared.InvoiceCategoryCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    invoice_category_create_api_model2: Optional[shared.InvoiceCategoryCreateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostAPIInvoiceNewcategoryRequest:
    headers: PostAPIInvoiceNewcategoryHeaders = field(default=None)
    request: PostAPIInvoiceNewcategoryRequests = field(default=None)
    

@dataclass
class PostAPIInvoiceNewcategoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    invoice_category_api_model: Optional[shared.InvoiceCategoryAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
