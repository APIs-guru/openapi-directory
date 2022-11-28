from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RegistryCreateArtifactPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryCreateArtifactQueryParams:
    artifact_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'artifact_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RegistryCreateArtifactRequest:
    path_params: RegistryCreateArtifactPathParams = field()
    query_params: RegistryCreateArtifactQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegistryCreateArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    artifact: Optional[Any] = field(default=None)
    
