from dataclasses import dataclass, field



@dataclass
class DeploymentsDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeploymentsDeleteRequest:
    path_params: DeploymentsDeletePathParams = field()
    

@dataclass
class DeploymentsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
