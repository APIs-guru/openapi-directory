from dataclasses import dataclass, field



@dataclass
class DeleteClickwrapsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteClickwrapsIDRequest:
    path_params: DeleteClickwrapsIDPathParams = field()
    

@dataclass
class DeleteClickwrapsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
