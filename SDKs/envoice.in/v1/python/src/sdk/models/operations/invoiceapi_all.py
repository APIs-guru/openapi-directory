from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class InvoiceAPIAllQueryParams:
    query_options_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.page', 'style': 'form', 'explode': True }})
    query_options_page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class InvoiceAPIAllHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class InvoiceAPIAllRequest:
    query_params: InvoiceAPIAllQueryParams = field(default=None)
    headers: InvoiceAPIAllHeaders = field(default=None)
    

@dataclass
class InvoiceAPIAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    list_result_invoice_details_api_model_: Optional[shared.ListResultInvoiceDetailsAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
