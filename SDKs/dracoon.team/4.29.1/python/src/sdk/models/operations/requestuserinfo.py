from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestUserInfoQueryParams:
    more_info: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'more_info', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestUserInfoHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    

@dataclass
class RequestUserInfoRequest:
    query_params: RequestUserInfoQueryParams = field(default=None)
    headers: RequestUserInfoHeaders = field(default=None)
    

@dataclass
class RequestUserInfoResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    user_account: Optional[shared.UserAccount] = field(default=None)
    
