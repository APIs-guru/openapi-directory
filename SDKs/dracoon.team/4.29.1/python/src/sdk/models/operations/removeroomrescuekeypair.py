from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveRoomRescueKeyPairPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveRoomRescueKeyPairQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveRoomRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveRoomRescueKeyPairRequest:
    path_params: RemoveRoomRescueKeyPairPathParams = field(default=None)
    query_params: RemoveRoomRescueKeyPairQueryParams = field(default=None)
    headers: RemoveRoomRescueKeyPairHeaders = field(default=None)
    

@dataclass
class RemoveRoomRescueKeyPairResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
