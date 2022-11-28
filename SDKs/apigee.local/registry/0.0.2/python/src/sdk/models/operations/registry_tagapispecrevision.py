from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryTagAPISpecRevisionPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryTagAPISpecRevisionRequest:
    path_params: RegistryTagAPISpecRevisionPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryTagAPISpecRevisionResponse:
    content_type: str = field()
    status_code: int = field()
    api_spec: Optional[Any] = field(default=None)
    
