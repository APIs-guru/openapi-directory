from dataclasses import dataclass, field



@dataclass
class RegistryGetArtifactContentsPathParams:
    artifact: str = field(metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetArtifactContentsRequest:
    path_params: RegistryGetArtifactContentsPathParams = field()
    

@dataclass
class RegistryGetArtifactContentsResponse:
    content_type: str = field()
    status_code: int = field()
    
