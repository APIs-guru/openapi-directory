from dataclasses import dataclass, field



@dataclass
class DeleteMessagesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessagesIDRequest:
    path_params: DeleteMessagesIDPathParams = field(default=None)
    

@dataclass
class DeleteMessagesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
