from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryReplaceArtifactPathParams:
    artifact: str = field(metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryReplaceArtifactRequest:
    path_params: RegistryReplaceArtifactPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryReplaceArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    artifact: Optional[Any] = field(default=None)
    
