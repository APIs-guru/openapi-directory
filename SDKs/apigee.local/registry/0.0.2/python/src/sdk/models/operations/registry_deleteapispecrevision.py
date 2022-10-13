from dataclasses import dataclass, field



@dataclass
class RegistryDeleteAPISpecRevisionPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = field(default=None, metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteAPISpecRevisionRequest:
    path_params: RegistryDeleteAPISpecRevisionPathParams = field(default=None)
    

@dataclass
class RegistryDeleteAPISpecRevisionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
