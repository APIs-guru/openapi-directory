from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPIInvoiceDeletecategoryHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIInvoiceDeletecategoryRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    invoice_category_delete_api_model: Optional[shared.InvoiceCategoryDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    invoice_category_delete_api_model1: Optional[shared.InvoiceCategoryDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    invoice_category_delete_api_model2: Optional[shared.InvoiceCategoryDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIInvoiceDeletecategoryRequest:
    headers: PostAPIInvoiceDeletecategoryHeaders = field()
    request: PostAPIInvoiceDeletecategoryRequests = field()
    

@dataclass
class PostAPIInvoiceDeletecategoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_api_invoice_deletecategory_200_application_json_int32_integer: Optional[int] = field(default=None)
    post_api_invoice_deletecategory_200_text_json_int32_integer: Optional[int] = field(default=None)
    
