from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class Request3ConfigHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class Request3ConfigRequest:
    headers: Request3ConfigHeaders = field(default=None)
    

@dataclass
class Request3ConfigResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    s3_config: Optional[shared.S3Config] = field(default=None)
    status_code: int = field(default=None)
    
