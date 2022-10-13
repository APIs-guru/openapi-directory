from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FileActionMovePathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileActionMoveRequestBody:
    destination: str = field(default=None, metadata={'multipart_form': { 'field_name': 'destination' }})
    

@dataclass
class FileActionMoveRequest:
    path_params: FileActionMovePathParams = field(default=None)
    request: FileActionMoveRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FileActionMoveResponse:
    content_type: str = field(default=None)
    file_action_entity: Optional[shared.FileActionEntity] = field(default=None)
    status_code: int = field(default=None)
    
