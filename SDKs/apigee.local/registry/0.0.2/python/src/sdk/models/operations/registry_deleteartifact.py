from dataclasses import dataclass, field



@dataclass
class RegistryDeleteArtifactPathParams:
    artifact: str = field(default=None, metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteArtifactRequest:
    path_params: RegistryDeleteArtifactPathParams = field(default=None)
    

@dataclass
class RegistryDeleteArtifactResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
