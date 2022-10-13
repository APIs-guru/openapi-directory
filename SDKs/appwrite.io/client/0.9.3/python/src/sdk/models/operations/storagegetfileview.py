from dataclasses import dataclass, field



@dataclass
class StorageGetFileViewPathParams:
    file_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageGetFileViewSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageGetFileViewRequest:
    path_params: StorageGetFileViewPathParams = field(default=None)
    security: StorageGetFileViewSecurity = field(default=None)
    

@dataclass
class StorageGetFileViewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
