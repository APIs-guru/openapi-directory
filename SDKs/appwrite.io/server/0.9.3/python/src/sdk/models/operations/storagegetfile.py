from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StorageGetFilePathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageGetFileSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageGetFileRequest:
    path_params: StorageGetFilePathParams = field(default=None)
    security: StorageGetFileSecurity = field(default=None)
    

@dataclass
class StorageGetFileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    file: Optional[shared.File] = field(default=None)
    
