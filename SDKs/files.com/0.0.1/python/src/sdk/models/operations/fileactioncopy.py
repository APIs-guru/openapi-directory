from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FileActionCopyPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileActionCopyRequestBody:
    destination: str = field(default=None, metadata={'multipart_form': { 'field_name': 'destination' }})
    structure: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'structure' }})
    

@dataclass
class FileActionCopyRequest:
    path_params: FileActionCopyPathParams = field(default=None)
    request: FileActionCopyRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FileActionCopyResponse:
    content_type: str = field(default=None)
    file_action_entity: Optional[shared.FileActionEntity] = field(default=None)
    status_code: int = field(default=None)
    
