from dataclasses import dataclass, field



@dataclass
class DeleteAutomationsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAutomationsIDRequest:
    path_params: DeleteAutomationsIDPathParams = field()
    

@dataclass
class DeleteAutomationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
