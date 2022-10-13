from dataclasses import dataclass, field



@dataclass
class DeleteAutomationsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAutomationsIDRequest:
    path_params: DeleteAutomationsIDPathParams = field(default=None)
    

@dataclass
class DeleteAutomationsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
