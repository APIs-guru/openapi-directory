from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateFileUploadChannelHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFileUploadChannelRequest:
    headers: CreateFileUploadChannelHeaders = field(default=None)
    request: shared.CreateFileUploadRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFileUploadChannelResponse:
    content_type: str = field(default=None)
    create_file_upload_response: Optional[shared.CreateFileUploadResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
