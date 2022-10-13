from dataclasses import dataclass, field



@dataclass
class DeleteBehaviorsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBehaviorsIDRequest:
    path_params: DeleteBehaviorsIDPathParams = field(default=None)
    

@dataclass
class DeleteBehaviorsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
