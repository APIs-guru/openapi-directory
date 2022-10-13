from dataclasses import dataclass, field



@dataclass
class DeleteConnectorPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConnectorRequest:
    path_params: DeleteConnectorPathParams = field(default=None)
    

@dataclass
class DeleteConnectorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
