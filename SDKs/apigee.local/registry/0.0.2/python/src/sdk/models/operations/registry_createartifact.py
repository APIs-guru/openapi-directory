from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryCreateArtifactPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryCreateArtifactQueryParams:
    artifact_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'artifact_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryCreateArtifactRequest:
    path_params: RegistryCreateArtifactPathParams = field(default=None)
    query_params: RegistryCreateArtifactQueryParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryCreateArtifactResponse:
    artifact: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
