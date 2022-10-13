from dataclasses import dataclass, field



@dataclass
class DeleteAPIKeysIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAPIKeysIDRequest:
    path_params: DeleteAPIKeysIDPathParams = field(default=None)
    

@dataclass
class DeleteAPIKeysIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
