from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StorageCreateFileRequestBody:
    file: str = field(metadata={'multipart_form': { 'field_name': 'file' }})
    read: Optional[List[str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'read' }})
    write: Optional[List[str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'write' }})
    

@dataclass
class StorageCreateFileSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageCreateFileRequest:
    security: StorageCreateFileSecurity = field()
    request: Optional[StorageCreateFileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class StorageCreateFileResponse:
    content_type: str = field()
    status_code: int = field()
    file: Optional[shared.File] = field(default=None)
    
