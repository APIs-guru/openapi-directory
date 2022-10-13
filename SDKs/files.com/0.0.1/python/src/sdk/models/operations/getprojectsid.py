from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectsIDRequest:
    path_params: GetProjectsIDPathParams = field(default=None)
    

@dataclass
class GetProjectsIDResponse:
    content_type: str = field(default=None)
    project_entity: Optional[shared.ProjectEntity] = field(default=None)
    status_code: int = field(default=None)
    
