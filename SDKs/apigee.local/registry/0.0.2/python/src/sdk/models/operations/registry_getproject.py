from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetProjectPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetProjectRequest:
    path_params: RegistryGetProjectPathParams = field(default=None)
    

@dataclass
class RegistryGetProjectResponse:
    content_type: str = field(default=None)
    project: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
