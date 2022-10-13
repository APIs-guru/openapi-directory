from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadFileAsMultipartPathParams:
    upload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileAsMultipartHeaders:
    content_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Range' }})
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token' }})
    

@dataclass
class UploadFileAsMultipartRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadFileAsMultipartRequestBody:
    file: Optional[UploadFileAsMultipartRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadFileAsMultipartRequest:
    path_params: UploadFileAsMultipartPathParams = field(default=None)
    headers: UploadFileAsMultipartHeaders = field(default=None)
    request: UploadFileAsMultipartRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadFileAsMultipartResponse:
    chunk_upload_response: Optional[shared.ChunkUploadResponse] = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
