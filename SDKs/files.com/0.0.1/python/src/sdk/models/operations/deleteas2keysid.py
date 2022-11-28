from dataclasses import dataclass, field



@dataclass
class DeleteAs2KeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAs2KeysIDRequest:
    path_params: DeleteAs2KeysIDPathParams = field()
    

@dataclass
class DeleteAs2KeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    
