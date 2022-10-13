from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryGetArtifactPathParams:
    artifact: str = field(default=None, metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetArtifactRequest:
    path_params: RegistryGetArtifactPathParams = field(default=None)
    

@dataclass
class RegistryGetArtifactResponse:
    artifact: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
