from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateS3TagHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateS3TagRequest:
    headers: CreateS3TagHeaders = field(default=None)
    request: shared.S3TagCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateS3TagResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_tag: Optional[shared.S3Tag] = field(default=None)
    status_code: int = field(default=None)
    
