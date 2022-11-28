from dataclasses import dataclass, field



@dataclass
class DeleteMessageReactionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessageReactionsIDRequest:
    path_params: DeleteMessageReactionsIDPathParams = field()
    

@dataclass
class DeleteMessageReactionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
