from dataclasses import dataclass, field



@dataclass
class DeletePublicKeysIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePublicKeysIDRequest:
    path_params: DeletePublicKeysIDPathParams = field(default=None)
    

@dataclass
class DeletePublicKeysIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
