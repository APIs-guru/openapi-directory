from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class StorageUpdateFilePathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class StorageUpdateFileRequestBody:
    read: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    write: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'write' }})
    

@dataclass
class StorageUpdateFileSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageUpdateFileRequest:
    path_params: StorageUpdateFilePathParams = field(default=None)
    request: Optional[StorageUpdateFileRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: StorageUpdateFileSecurity = field(default=None)
    

@dataclass
class StorageUpdateFileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    file: Optional[shared.File] = field(default=None)
    
