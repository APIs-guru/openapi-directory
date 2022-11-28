from dataclasses import dataclass, field



@dataclass
class DeleteMessagesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessagesIDRequest:
    path_params: DeleteMessagesIDPathParams = field()
    

@dataclass
class DeleteMessagesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
