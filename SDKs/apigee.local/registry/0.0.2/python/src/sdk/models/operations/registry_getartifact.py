from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetArtifactPathParams:
    artifact: str = field(metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetArtifactRequest:
    path_params: RegistryGetArtifactPathParams = field()
    

@dataclass
class RegistryGetArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    artifact: Optional[Any] = field(default=None)
    
