from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FileActionBeginUploadPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileActionBeginUploadRequestBody:
    mkdir_parents: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'mkdir_parents' }})
    part: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'part' }})
    parts: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'parts' }})
    ref: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ref' }})
    restart: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'restart' }})
    with_rename: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'with_rename' }})
    

@dataclass
class FileActionBeginUploadRequest:
    path_params: FileActionBeginUploadPathParams = field()
    request: Optional[FileActionBeginUploadRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FileActionBeginUploadResponse:
    content_type: str = field()
    status_code: int = field()
    file_upload_part_entities: Optional[List[shared.FileUploadPartEntity]] = field(default=None)
    
