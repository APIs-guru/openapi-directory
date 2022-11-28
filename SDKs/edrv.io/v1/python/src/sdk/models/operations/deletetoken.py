from dataclasses import dataclass, field



@dataclass
class DeleteTokenPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTokenRequest:
    path_params: DeleteTokenPathParams = field()
    

@dataclass
class DeleteTokenResponse:
    content_type: str = field()
    status_code: int = field()
    
