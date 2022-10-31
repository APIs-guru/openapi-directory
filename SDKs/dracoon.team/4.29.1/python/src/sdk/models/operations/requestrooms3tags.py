from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestRoomS3TagsPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomS3TagsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestRoomS3TagsRequest:
    path_params: RequestRoomS3TagsPathParams = field(default=None)
    headers: RequestRoomS3TagsHeaders = field(default=None)
    

@dataclass
class RequestRoomS3TagsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_tag_list: Optional[shared.S3TagList] = field(default=None)
    status_code: int = field(default=None)
    
