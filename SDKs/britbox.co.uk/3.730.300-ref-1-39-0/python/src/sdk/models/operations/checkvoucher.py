from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckVoucherPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckVoucherQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CheckVoucherSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckVoucherRequest:
    path_params: CheckVoucherPathParams = field()
    query_params: CheckVoucherQueryParams = field()
    request: shared.ItvVoucherRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CheckVoucherSecurity = field()
    

@dataclass
class CheckVoucherResponse:
    content_type: str = field()
    status_code: int = field()
    itv_voucher: Optional[shared.ItvVoucher] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
