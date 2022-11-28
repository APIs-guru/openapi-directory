from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIInvoiceAllcategoriesQueryParams:
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIInvoiceAllcategoriesHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIInvoiceAllcategoriesRequest:
    headers: GetAPIInvoiceAllcategoriesHeaders = field()
    query_params: GetAPIInvoiceAllcategoriesQueryParams = field()
    

@dataclass
class GetAPIInvoiceAllcategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    list_result_invoice_category_api_model_: Optional[shared.ListResultInvoiceCategoryAPIModel] = field(default=None)
    
