from dataclasses import dataclass, field



@dataclass
class DeleteLocksPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLocksPathQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteLocksPathRequest:
    path_params: DeleteLocksPathPathParams = field()
    query_params: DeleteLocksPathQueryParams = field()
    

@dataclass
class DeleteLocksPathResponse:
    content_type: str = field()
    status_code: int = field()
    
