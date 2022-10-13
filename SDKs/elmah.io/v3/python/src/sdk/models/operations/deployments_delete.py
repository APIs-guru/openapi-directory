from dataclasses import dataclass, field



@dataclass
class DeploymentsDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeploymentsDeleteRequest:
    path_params: DeploymentsDeletePathParams = field(default=None)
    

@dataclass
class DeploymentsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
