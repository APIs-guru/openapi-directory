from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchProjectsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchProjectsIDRequestBody:
    global_access: str = field(default=None, metadata={'multipart_form': { 'field_name': 'global_access' }})
    

@dataclass
class PatchProjectsIDRequest:
    path_params: PatchProjectsIDPathParams = field(default=None)
    request: PatchProjectsIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchProjectsIDResponse:
    content_type: str = field(default=None)
    project_entity: Optional[shared.ProjectEntity] = field(default=None)
    status_code: int = field(default=None)
    
