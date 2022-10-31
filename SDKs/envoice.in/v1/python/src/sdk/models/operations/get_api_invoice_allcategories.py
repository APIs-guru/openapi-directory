from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIInvoiceAllcategoriesQueryParams:
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIInvoiceAllcategoriesHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIInvoiceAllcategoriesRequest:
    query_params: GetAPIInvoiceAllcategoriesQueryParams = field(default=None)
    headers: GetAPIInvoiceAllcategoriesHeaders = field(default=None)
    

@dataclass
class GetAPIInvoiceAllcategoriesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    list_result_invoice_category_api_model_: Optional[shared.ListResultInvoiceCategoryAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
