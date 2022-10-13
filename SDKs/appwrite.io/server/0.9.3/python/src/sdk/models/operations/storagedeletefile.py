from dataclasses import dataclass, field



@dataclass
class StorageDeleteFilePathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageDeleteFileSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageDeleteFileRequest:
    path_params: StorageDeleteFilePathParams = field(default=None)
    security: StorageDeleteFileSecurity = field(default=None)
    

@dataclass
class StorageDeleteFileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
