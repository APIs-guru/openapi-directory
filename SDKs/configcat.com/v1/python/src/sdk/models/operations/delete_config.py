from dataclasses import dataclass, field



@dataclass
class DeleteConfigPathParams:
    config_id: str = field(metadata={'path_param': { 'field_name': 'configId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConfigRequest:
    path_params: DeleteConfigPathParams = field()
    

@dataclass
class DeleteConfigResponse:
    content_type: str = field()
    status_code: int = field()
    
