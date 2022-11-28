from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPIInvoiceUpdatecategoryHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPIInvoiceUpdatecategoryRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    invoice_category_update_api_model: Optional[shared.InvoiceCategoryUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    invoice_category_update_api_model1: Optional[shared.InvoiceCategoryUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    invoice_category_update_api_model2: Optional[shared.InvoiceCategoryUpdateAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPIInvoiceUpdatecategoryRequest:
    headers: PostAPIInvoiceUpdatecategoryHeaders = field()
    request: PostAPIInvoiceUpdatecategoryRequests = field()
    

@dataclass
class PostAPIInvoiceUpdatecategoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    invoice_category_api_model: Optional[shared.InvoiceCategoryAPIModel] = field(default=None)
    
