from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UploadFileByTokenAsBinary1PathParams:
    token: str = field(default=None, metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileByTokenAsBinary1Headers:
    content_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Range' }})
    

@dataclass
class UploadFileByTokenAsBinary1RequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadFileByTokenAsBinary1RequestBody:
    file: Optional[UploadFileByTokenAsBinary1RequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadFileByTokenAsBinary1Request:
    path_params: UploadFileByTokenAsBinary1PathParams = field(default=None)
    headers: UploadFileByTokenAsBinary1Headers = field(default=None)
    request: UploadFileByTokenAsBinary1RequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadFileByTokenAsBinary1Response:
    chunk_upload_response: Optional[shared.ChunkUploadResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    upload_file_by_token_as_binary_1_400_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_401_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_403_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_404_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_406_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_507_application_json_one_of: Optional[Any] = field(default=None)
    
