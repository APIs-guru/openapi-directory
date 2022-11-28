from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveRoomRescueKeyPairPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveRoomRescueKeyPairQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveRoomRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveRoomRescueKeyPairRequest:
    headers: RemoveRoomRescueKeyPairHeaders = field()
    path_params: RemoveRoomRescueKeyPairPathParams = field()
    query_params: RemoveRoomRescueKeyPairQueryParams = field()
    

@dataclass
class RemoveRoomRescueKeyPairResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
