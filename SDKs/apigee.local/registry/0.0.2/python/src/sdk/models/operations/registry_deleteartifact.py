from dataclasses import dataclass, field



@dataclass
class RegistryDeleteArtifactPathParams:
    artifact: str = field(metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteArtifactRequest:
    path_params: RegistryDeleteArtifactPathParams = field()
    

@dataclass
class RegistryDeleteArtifactResponse:
    content_type: str = field()
    status_code: int = field()
    
