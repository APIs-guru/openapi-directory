from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateS3ConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateS3ConfigRequest:
    headers: CreateS3ConfigHeaders = field(default=None)
    request: shared.S3ConfigCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateS3ConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_config: Optional[shared.S3Config] = field(default=None)
    status_code: int = field(default=None)
    
