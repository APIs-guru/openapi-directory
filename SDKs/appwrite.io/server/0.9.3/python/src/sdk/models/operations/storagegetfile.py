from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StorageGetFilePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageGetFileSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageGetFileRequest:
    path_params: StorageGetFilePathParams = field()
    security: StorageGetFileSecurity = field()
    

@dataclass
class StorageGetFileResponse:
    content_type: str = field()
    status_code: int = field()
    file: Optional[shared.File] = field(default=None)
    
