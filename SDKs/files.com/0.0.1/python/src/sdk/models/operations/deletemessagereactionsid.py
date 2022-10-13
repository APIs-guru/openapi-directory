from dataclasses import dataclass, field



@dataclass
class DeleteMessageReactionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessageReactionsIDRequest:
    path_params: DeleteMessageReactionsIDPathParams = field(default=None)
    

@dataclass
class DeleteMessageReactionsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
