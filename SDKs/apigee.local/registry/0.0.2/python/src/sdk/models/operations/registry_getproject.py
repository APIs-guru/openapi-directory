from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetProjectPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetProjectRequest:
    path_params: RegistryGetProjectPathParams = field()
    

@dataclass
class RegistryGetProjectResponse:
    content_type: str = field()
    status_code: int = field()
    project: Optional[Any] = field(default=None)
    
