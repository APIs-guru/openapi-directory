from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestS3TagsInfoHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestS3TagsInfoRequest:
    headers: RequestS3TagsInfoHeaders = field(default=None)
    

@dataclass
class RequestS3TagsInfoResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_tag_list: Optional[shared.S3TagList] = field(default=None)
    status_code: int = field(default=None)
    
