from dataclasses import dataclass, field



@dataclass
class DeleteV3BoardsBoardIDPathParams:
    board_id: str = field(metadata={'path_param': { 'field_name': 'board_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteV3BoardsBoardIDRequest:
    path_params: DeleteV3BoardsBoardIDPathParams = field()
    

@dataclass
class DeleteV3BoardsBoardIDResponse:
    content_type: str = field()
    status_code: int = field()
    
