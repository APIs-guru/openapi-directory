from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class StorageGetFileDownloadPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageGetFileDownloadSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageGetFileDownloadRequest:
    path_params: StorageGetFileDownloadPathParams = field()
    security: StorageGetFileDownloadSecurity = field()
    

@dataclass
class StorageGetFileDownloadResponse:
    content_type: str = field()
    status_code: int = field()
    
