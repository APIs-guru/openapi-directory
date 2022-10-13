from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetRoomRescueKeyPairPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetRoomRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class SetRoomRescueKeyPairRequest:
    path_params: SetRoomRescueKeyPairPathParams = field(default=None)
    headers: SetRoomRescueKeyPairHeaders = field(default=None)
    request: shared.UserKeyPairContainer = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetRoomRescueKeyPairResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
