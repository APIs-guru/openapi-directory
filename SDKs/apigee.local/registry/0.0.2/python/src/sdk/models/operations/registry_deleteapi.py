from dataclasses import dataclass, field



@dataclass
class RegistryDeleteAPIPathParams:
    api: str = field(default=None, metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteAPIRequest:
    path_params: RegistryDeleteAPIPathParams = field(default=None)
    

@dataclass
class RegistryDeleteAPIResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
