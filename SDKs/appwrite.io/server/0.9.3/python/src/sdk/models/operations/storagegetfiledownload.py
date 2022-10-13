from dataclasses import dataclass, field



@dataclass
class StorageGetFileDownloadPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageGetFileDownloadSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageGetFileDownloadRequest:
    path_params: StorageGetFileDownloadPathParams = field(default=None)
    security: StorageGetFileDownloadSecurity = field(default=None)
    

@dataclass
class StorageGetFileDownloadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
