from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UploadFileByTokenAsBinary1PathParams:
    token: str = field(metadata={'path_param': { 'field_name': 'token', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileByTokenAsBinary1Headers:
    content_range: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Range', 'style': 'simple', 'explode': False }})
    

@dataclass
class UploadFileByTokenAsBinary1RequestBodyFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class UploadFileByTokenAsBinary1RequestBody:
    file: Optional[UploadFileByTokenAsBinary1RequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadFileByTokenAsBinary1Request:
    headers: UploadFileByTokenAsBinary1Headers = field()
    path_params: UploadFileByTokenAsBinary1PathParams = field()
    request: UploadFileByTokenAsBinary1RequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadFileByTokenAsBinary1Response:
    content_type: str = field()
    status_code: int = field()
    chunk_upload_response: Optional[shared.ChunkUploadResponse] = field(default=None)
    upload_file_by_token_as_binary_1_400_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_401_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_403_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_404_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_406_application_json_one_of: Optional[Any] = field(default=None)
    upload_file_by_token_as_binary_1_507_application_json_one_of: Optional[Any] = field(default=None)
    
