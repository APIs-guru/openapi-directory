from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UploadFileAsMultipartPublic1PathParams:
    access_key: str = field(metadata={'path_param': { 'field_name': 'access_key', 'style': 'simple', 'explode': False }})
    upload_id: str = field(metadata={'path_param': { 'field_name': 'upload_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileAsMultipartPublic1Headers:
    content_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileAsMultipartPublic1RequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadFileAsMultipartPublic1RequestBody:
    file: Optional[UploadFileAsMultipartPublic1RequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadFileAsMultipartPublic1Request:
    headers: UploadFileAsMultipartPublic1Headers = field()
    path_params: UploadFileAsMultipartPublic1PathParams = field()
    request: Optional[UploadFileAsMultipartPublic1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadFileAsMultipartPublic1Response:
    content_type: str = field()
    status_code: int = field()
    chunk_upload_response: Optional[shared.ChunkUploadResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
