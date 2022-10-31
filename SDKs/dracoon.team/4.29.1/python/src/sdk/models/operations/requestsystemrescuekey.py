from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestSystemRescueKeyPathParams:
    file_id: int = field(default=None, metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSystemRescueKeyQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestSystemRescueKeyHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestSystemRescueKeyRequest:
    path_params: RequestSystemRescueKeyPathParams = field(default=None)
    query_params: RequestSystemRescueKeyQueryParams = field(default=None)
    headers: RequestSystemRescueKeyHeaders = field(default=None)
    

@dataclass
class RequestSystemRescueKeyResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    file_key: Optional[shared.FileKey] = field(default=None)
    status_code: int = field(default=None)
    
