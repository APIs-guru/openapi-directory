from dataclasses import dataclass, field



@dataclass
class RegistryDeleteAPIVersionPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteAPIVersionRequest:
    path_params: RegistryDeleteAPIVersionPathParams = field(default=None)
    

@dataclass
class RegistryDeleteAPIVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
