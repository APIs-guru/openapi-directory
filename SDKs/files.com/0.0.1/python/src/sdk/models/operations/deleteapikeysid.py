from dataclasses import dataclass, field



@dataclass
class DeleteAPIKeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIKeysIDRequest:
    path_params: DeleteAPIKeysIDPathParams = field()
    

@dataclass
class DeleteAPIKeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    
