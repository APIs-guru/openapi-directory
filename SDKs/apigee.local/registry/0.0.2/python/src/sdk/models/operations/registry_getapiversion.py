from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetAPIVersionPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetAPIVersionRequest:
    path_params: RegistryGetAPIVersionPathParams = field(default=None)
    

@dataclass
class RegistryGetAPIVersionResponse:
    api_version: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
