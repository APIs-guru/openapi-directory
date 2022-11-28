from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class StorageDeleteFilePathParams:
    file_id: str = field(metadata={'path_param': { 'field_name': 'fileId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StorageDeleteFileSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class StorageDeleteFileRequest:
    path_params: StorageDeleteFilePathParams = field()
    security: StorageDeleteFileSecurity = field()
    

@dataclass
class StorageDeleteFileResponse:
    content_type: str = field()
    status_code: int = field()
    
