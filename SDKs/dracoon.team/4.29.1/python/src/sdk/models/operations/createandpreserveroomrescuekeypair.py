from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAndPreserveRoomRescueKeyPairPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAndPreserveRoomRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAndPreserveRoomRescueKeyPairRequest:
    headers: CreateAndPreserveRoomRescueKeyPairHeaders = field()
    path_params: CreateAndPreserveRoomRescueKeyPairPathParams = field()
    request: shared.CreateKeyPairRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAndPreserveRoomRescueKeyPairResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
