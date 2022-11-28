from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetAPIVersionPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetAPIVersionRequest:
    path_params: RegistryGetAPIVersionPathParams = field()
    

@dataclass
class RegistryGetAPIVersionResponse:
    content_type: str = field()
    status_code: int = field()
    api_version: Optional[Any] = field(default=None)
    
