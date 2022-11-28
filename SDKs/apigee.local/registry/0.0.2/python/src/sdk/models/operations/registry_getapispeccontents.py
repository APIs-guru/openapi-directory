from dataclasses import dataclass, field



@dataclass
class RegistryGetAPISpecContentsPathParams:
    api: str = field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegistryGetAPISpecContentsRequest:
    path_params: RegistryGetAPISpecContentsPathParams = field()
    

@dataclass
class RegistryGetAPISpecContentsResponse:
    content_type: str = field()
    status_code: int = field()
    
