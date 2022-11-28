from dataclasses import dataclass, field



@dataclass
class RegistryDeleteAPIPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryDeleteAPIRequest:
    path_params: RegistryDeleteAPIPathParams = field()
    

@dataclass
class RegistryDeleteAPIResponse:
    content_type: str = field()
    status_code: int = field()
    
