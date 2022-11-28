from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestRoomRescueKeyPathParams:
    file_id: int = field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomRescueKeyQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestRoomRescueKeyHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomRescueKeyRequest:
    headers: RequestRoomRescueKeyHeaders = field()
    path_params: RequestRoomRescueKeyPathParams = field()
    query_params: RequestRoomRescueKeyQueryParams = field()
    

@dataclass
class RequestRoomRescueKeyResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    file_key: Optional[shared.FileKey] = field(default=None)
    
