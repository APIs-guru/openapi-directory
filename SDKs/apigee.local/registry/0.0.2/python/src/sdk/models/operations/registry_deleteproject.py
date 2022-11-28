from dataclasses import dataclass, field



@dataclass
class RegistryDeleteProjectPathParams:
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteProjectRequest:
    path_params: RegistryDeleteProjectPathParams = field()
    

@dataclass
class RegistryDeleteProjectResponse:
    content_type: str = field()
    status_code: int = field()
    
