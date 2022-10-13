from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVoucherByIDPathParams:
    plan_id: str = field(default=None, metadata={'path_param': { 'field_name': 'planId', 'style': 'simple', 'explode': False }})
    voucher_id: str = field(default=None, metadata={'path_param': { 'field_name': 'voucherId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVoucherByIDQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVoucherByIDSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetVoucherByIDRequest:
    path_params: GetVoucherByIDPathParams = field(default=None)
    query_params: GetVoucherByIDQueryParams = field(default=None)
    security: GetVoucherByIDSecurity = field(default=None)
    

@dataclass
class GetVoucherByIDResponse:
    content_type: str = field(default=None)
    itv_voucher: Optional[shared.ItvVoucher] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
