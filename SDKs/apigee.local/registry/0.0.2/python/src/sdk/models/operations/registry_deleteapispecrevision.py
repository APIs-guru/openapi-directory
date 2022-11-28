from dataclasses import dataclass, field



@dataclass
class RegistryDeleteAPISpecRevisionPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteAPISpecRevisionRequest:
    path_params: RegistryDeleteAPISpecRevisionPathParams = field()
    

@dataclass
class RegistryDeleteAPISpecRevisionResponse:
    content_type: str = field()
    status_code: int = field()
    
