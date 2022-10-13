from dataclasses import dataclass, field



@dataclass
class GetConfigurationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfigurationRequest:
    path_params: GetConfigurationPathParams = field(default=None)
    

@dataclass
class GetConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
