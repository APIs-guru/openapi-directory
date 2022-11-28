from dataclasses import dataclass, field



@dataclass
class DeleteMessageCommentsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessageCommentsIDRequest:
    path_params: DeleteMessageCommentsIDPathParams = field()
    

@dataclass
class DeleteMessageCommentsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
