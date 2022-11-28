from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetRoomRescueKeyPairPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetRoomRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetRoomRescueKeyPairRequest:
    headers: SetRoomRescueKeyPairHeaders = field()
    path_params: SetRoomRescueKeyPairPathParams = field()
    request: shared.UserKeyPairContainer = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetRoomRescueKeyPairResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
