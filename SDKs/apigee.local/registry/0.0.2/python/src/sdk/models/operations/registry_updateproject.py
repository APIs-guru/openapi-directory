from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryUpdateProjectPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryUpdateProjectQueryParams:
    update_mask: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'update_mask', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryUpdateProjectRequest:
    path_params: RegistryUpdateProjectPathParams = field(default=None)
    query_params: RegistryUpdateProjectQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryUpdateProjectResponse:
    content_type: str = field(default=None)
    project: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
