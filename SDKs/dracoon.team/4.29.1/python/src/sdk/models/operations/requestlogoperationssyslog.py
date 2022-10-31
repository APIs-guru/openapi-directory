from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestLogOperationsSyslogQueryParams:
    is_deprecated: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'is_deprecated', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestLogOperationsSyslogHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLogOperationsSyslogRequest:
    query_params: RequestLogOperationsSyslogQueryParams = field(default=None)
    headers: RequestLogOperationsSyslogHeaders = field(default=None)
    

@dataclass
class RequestLogOperationsSyslogResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    log_operation_list: Optional[shared.LogOperationList] = field(default=None)
    status_code: int = field(default=None)
    
