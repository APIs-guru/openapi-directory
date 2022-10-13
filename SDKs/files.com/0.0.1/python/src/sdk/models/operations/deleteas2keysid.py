from dataclasses import dataclass, field



@dataclass
class DeleteAs2KeysIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAs2KeysIDRequest:
    path_params: DeleteAs2KeysIDPathParams = field(default=None)
    

@dataclass
class DeleteAs2KeysIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
