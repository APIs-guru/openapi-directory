from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SetRoomS3TagsPathParams:
    room_id: int = field(default=None, metadata={'path_param': { 'field_name': 'room_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetRoomS3TagsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetRoomS3TagsRequest:
    path_params: SetRoomS3TagsPathParams = field(default=None)
    headers: SetRoomS3TagsHeaders = field(default=None)
    request: shared.S3TagIds = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetRoomS3TagsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_tag_list: Optional[shared.S3TagList] = field(default=None)
    status_code: int = field(default=None)
    
