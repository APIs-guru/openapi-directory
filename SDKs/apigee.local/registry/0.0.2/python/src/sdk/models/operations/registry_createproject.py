from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryCreateProjectQueryParams:
    project_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'project_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryCreateProjectRequest:
    query_params: RegistryCreateProjectQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryCreateProjectResponse:
    content_type: str = field()
    status_code: int = field()
    project: Optional[Any] = field(default=None)
    
