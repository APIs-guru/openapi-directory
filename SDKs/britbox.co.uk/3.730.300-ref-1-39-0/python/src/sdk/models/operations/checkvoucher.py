from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckVoucherPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckVoucherQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CheckVoucherSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckVoucherRequest:
    path_params: CheckVoucherPathParams = field(default=None)
    query_params: CheckVoucherQueryParams = field(default=None)
    request: shared.ItvVoucherRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CheckVoucherSecurity = field(default=None)
    

@dataclass
class CheckVoucherResponse:
    content_type: str = field(default=None)
    itv_voucher: Optional[shared.ItvVoucher] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
