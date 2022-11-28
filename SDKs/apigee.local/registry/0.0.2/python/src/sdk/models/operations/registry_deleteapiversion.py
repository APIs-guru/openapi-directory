from dataclasses import dataclass, field



@dataclass
class RegistryDeleteAPIVersionPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteAPIVersionRequest:
    path_params: RegistryDeleteAPIVersionPathParams = field()
    

@dataclass
class RegistryDeleteAPIVersionResponse:
    content_type: str = field()
    status_code: int = field()
    
