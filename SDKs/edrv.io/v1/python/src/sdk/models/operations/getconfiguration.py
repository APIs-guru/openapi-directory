from dataclasses import dataclass, field



@dataclass
class GetConfigurationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfigurationRequest:
    path_params: GetConfigurationPathParams = field()
    

@dataclass
class GetConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    
