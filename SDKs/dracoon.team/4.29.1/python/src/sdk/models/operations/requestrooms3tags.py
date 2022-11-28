from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestRoomS3TagsPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomS3TagsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomS3TagsRequest:
    headers: RequestRoomS3TagsHeaders = field()
    path_params: RequestRoomS3TagsPathParams = field()
    

@dataclass
class RequestRoomS3TagsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_tag_list: Optional[shared.S3TagList] = field(default=None)
    
