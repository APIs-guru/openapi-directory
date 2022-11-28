from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadFileAsMultipartPathParams:
    upload_id: str = field(metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileAsMultipartHeaders:
    content_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileAsMultipartRequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadFileAsMultipartRequestBody:
    file: Optional[UploadFileAsMultipartRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadFileAsMultipartRequest:
    headers: UploadFileAsMultipartHeaders = field()
    path_params: UploadFileAsMultipartPathParams = field()
    request: UploadFileAsMultipartRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadFileAsMultipartResponse:
    content_type: str = field()
    status_code: int = field()
    chunk_upload_response: Optional[shared.ChunkUploadResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
