from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestS3TagPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestS3TagHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestS3TagRequest:
    headers: RequestS3TagHeaders = field()
    path_params: RequestS3TagPathParams = field()
    

@dataclass
class RequestS3TagResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_tag: Optional[shared.S3Tag] = field(default=None)
    
