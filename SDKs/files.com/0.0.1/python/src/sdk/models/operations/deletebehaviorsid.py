from dataclasses import dataclass, field



@dataclass
class DeleteBehaviorsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBehaviorsIDRequest:
    path_params: DeleteBehaviorsIDPathParams = field()
    

@dataclass
class DeleteBehaviorsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
