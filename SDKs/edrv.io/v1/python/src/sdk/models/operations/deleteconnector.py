from dataclasses import dataclass, field



@dataclass
class DeleteConnectorPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectorRequest:
    path_params: DeleteConnectorPathParams = field()
    

@dataclass
class DeleteConnectorResponse:
    content_type: str = field()
    status_code: int = field()
    
