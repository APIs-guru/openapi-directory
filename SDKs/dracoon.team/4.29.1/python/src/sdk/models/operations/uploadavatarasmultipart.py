from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadAvatarAsMultipartHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadAvatarAsMultipartRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadAvatarAsMultipartRequestBody:
    file: Optional[UploadAvatarAsMultipartRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadAvatarAsMultipartRequest:
    headers: UploadAvatarAsMultipartHeaders = field(default=None)
    request: UploadAvatarAsMultipartRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadAvatarAsMultipartResponse:
    avatar: Optional[shared.Avatar] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
