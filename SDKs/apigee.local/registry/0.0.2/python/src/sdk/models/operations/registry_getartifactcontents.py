from dataclasses import dataclass, field



@dataclass
class RegistryGetArtifactContentsPathParams:
    artifact: str = field(default=None, metadata={'path_param': { 'field_name': 'artifact', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetArtifactContentsRequest:
    path_params: RegistryGetArtifactContentsPathParams = field(default=None)
    

@dataclass
class RegistryGetArtifactContentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
