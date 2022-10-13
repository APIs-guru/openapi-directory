from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAndPreserveRoomRescueKeyPairPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAndPreserveRoomRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class CreateAndPreserveRoomRescueKeyPairRequest:
    path_params: CreateAndPreserveRoomRescueKeyPairPathParams = field(default=None)
    headers: CreateAndPreserveRoomRescueKeyPairHeaders = field(default=None)
    request: shared.CreateKeyPairRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateAndPreserveRoomRescueKeyPairResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
