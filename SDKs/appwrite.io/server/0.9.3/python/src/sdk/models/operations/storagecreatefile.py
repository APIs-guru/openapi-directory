from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StorageCreateFileRequestBody:
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    read: Optional[List[str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'read' }})
    write: Optional[List[str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'write' }})
    

@dataclass
class StorageCreateFileSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageCreateFileRequest:
    request: Optional[StorageCreateFileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: StorageCreateFileSecurity = field(default=None)
    

@dataclass
class StorageCreateFileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    file: Optional[shared.File] = field(default=None)
    
