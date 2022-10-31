from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestS3TagPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestS3TagHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestS3TagRequest:
    path_params: RequestS3TagPathParams = field(default=None)
    headers: RequestS3TagHeaders = field(default=None)
    

@dataclass
class RequestS3TagResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_tag: Optional[shared.S3Tag] = field(default=None)
    status_code: int = field(default=None)
    
