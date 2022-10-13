from dataclasses import dataclass, field



@dataclass
class DeleteTokenPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTokenRequest:
    path_params: DeleteTokenPathParams = field(default=None)
    

@dataclass
class DeleteTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
