from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestCustomerInfoHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerInfoRequest:
    headers: RequestCustomerInfoHeaders = field()
    

@dataclass
class RequestCustomerInfoResponse:
    content_type: str = field()
    status_code: int = field()
    customer_data: Optional[shared.CustomerData] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
