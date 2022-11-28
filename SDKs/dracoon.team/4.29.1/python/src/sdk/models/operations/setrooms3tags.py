from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetRoomS3TagsPathParams:
    room_id: int = field(metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetRoomS3TagsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetRoomS3TagsRequest:
    headers: SetRoomS3TagsHeaders = field()
    path_params: SetRoomS3TagsPathParams = field()
    request: shared.S3TagIds = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetRoomS3TagsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_tag_list: Optional[shared.S3TagList] = field(default=None)
    
