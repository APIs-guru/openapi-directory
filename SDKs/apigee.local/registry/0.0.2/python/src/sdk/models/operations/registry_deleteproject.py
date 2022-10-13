from dataclasses import dataclass, field



@dataclass
class RegistryDeleteProjectPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteProjectRequest:
    path_params: RegistryDeleteProjectPathParams = field(default=None)
    

@dataclass
class RegistryDeleteProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
