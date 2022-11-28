from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FileActionMovePathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class FileActionMoveRequestBody:
    destination: str = field(metadata={'multipart_form': { 'field_name': 'destination' }})
    

@dataclass
class FileActionMoveRequest:
    path_params: FileActionMovePathParams = field()
    request: FileActionMoveRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class FileActionMoveResponse:
    content_type: str = field()
    status_code: int = field()
    file_action_entity: Optional[shared.FileActionEntity] = field(default=None)
    
