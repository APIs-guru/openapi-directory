from dataclasses import dataclass, field



@dataclass
class DeleteLocksPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLocksPathQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteLocksPathRequest:
    path_params: DeleteLocksPathPathParams = field(default=None)
    query_params: DeleteLocksPathQueryParams = field(default=None)
    

@dataclass
class DeleteLocksPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
