from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVoucherByIDPathParams:
    plan_id: str = field(metadata={'path_param': { 'field_name': 'planId', 'style': 'simple', 'explode': False }})
    voucher_id: str = field(metadata={'path_param': { 'field_name': 'voucherId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVoucherByIDQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVoucherByIDSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVoucherByIDRequest:
    path_params: GetVoucherByIDPathParams = field()
    query_params: GetVoucherByIDQueryParams = field()
    security: GetVoucherByIDSecurity = field()
    

@dataclass
class GetVoucherByIDResponse:
    content_type: str = field()
    status_code: int = field()
    itv_voucher: Optional[shared.ItvVoucher] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
