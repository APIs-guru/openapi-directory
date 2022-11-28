from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class StorageGetFileViewPathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageGetFileViewSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageGetFileViewRequest:
    path_params: StorageGetFileViewPathParams = field()
    security: StorageGetFileViewSecurity = field()
    

@dataclass
class StorageGetFileViewResponse:
    content_type: str = field()
    status_code: int = field()
    
