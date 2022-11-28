from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PaymentLinkAPIAllQueryParams:
    query_options_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.page', 'style': 'form', 'explode': True }})
    query_options_page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'queryOptions.pageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class PaymentLinkAPIAllHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class PaymentLinkAPIAllRequest:
    headers: PaymentLinkAPIAllHeaders = field()
    query_params: PaymentLinkAPIAllQueryParams = field()
    

@dataclass
class PaymentLinkAPIAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    list_result_payment_link_: Optional[shared.ListResultPaymentLink] = field(default=None)
    
