from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestRoomRescueKeyPairPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomRescueKeyPairQueryParams:
    version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestRoomRescueKeyPairHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomRescueKeyPairRequest:
    headers: RequestRoomRescueKeyPairHeaders = field()
    path_params: RequestRoomRescueKeyPairPathParams = field()
    query_params: RequestRoomRescueKeyPairQueryParams = field()
    

@dataclass
class RequestRoomRescueKeyPairResponseOutput:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_key_pair_container: Optional[shared.UserKeyPairContainerOutput] = field(default=None)
    
