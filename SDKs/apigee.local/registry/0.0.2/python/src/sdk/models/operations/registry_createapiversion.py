from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryCreateAPIVersionPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryCreateAPIVersionQueryParams:
    api_version_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_version_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryCreateAPIVersionRequest:
    path_params: RegistryCreateAPIVersionPathParams = field(default=None)
    query_params: RegistryCreateAPIVersionQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryCreateAPIVersionResponse:
    api_version: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
