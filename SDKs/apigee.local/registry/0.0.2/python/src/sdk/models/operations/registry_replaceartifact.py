from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryReplaceArtifactPathParams:
    artifact: str = field(default=None, metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryReplaceArtifactRequest:
    path_params: RegistryReplaceArtifactPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryReplaceArtifactResponse:
    artifact: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
