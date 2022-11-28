from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectsIDRequest:
    path_params: GetProjectsIDPathParams = field()
    

@dataclass
class GetProjectsIDResponse:
    content_type: str = field()
    status_code: int = field()
    project_entity: Optional[shared.ProjectEntity] = field(default=None)
    
