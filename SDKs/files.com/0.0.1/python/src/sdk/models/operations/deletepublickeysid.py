from dataclasses import dataclass, field



@dataclass
class DeletePublicKeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePublicKeysIDRequest:
    path_params: DeletePublicKeysIDPathParams = field()
    

@dataclass
class DeletePublicKeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    
