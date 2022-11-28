from dataclasses import dataclass, field



@dataclass
class DeleteFormFieldSetsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFormFieldSetsIDRequest:
    path_params: DeleteFormFieldSetsIDPathParams = field()
    

@dataclass
class DeleteFormFieldSetsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
