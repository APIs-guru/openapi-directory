from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PaymentLinkAPIAllQueryParams:
    query_options_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.page', 'style': 'form', 'explode': True }})
    query_options_page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class PaymentLinkAPIAllHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class PaymentLinkAPIAllRequest:
    query_params: PaymentLinkAPIAllQueryParams = field(default=None)
    headers: PaymentLinkAPIAllHeaders = field(default=None)
    

@dataclass
class PaymentLinkAPIAllResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    list_result_payment_link_: Optional[shared.ListResultPaymentLink] = field(default=None)
    status_code: int = field(default=None)
    
