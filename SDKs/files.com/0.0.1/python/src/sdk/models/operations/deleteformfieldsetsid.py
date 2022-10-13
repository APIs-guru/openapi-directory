from dataclasses import dataclass, field



@dataclass
class DeleteFormFieldSetsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFormFieldSetsIDRequest:
    path_params: DeleteFormFieldSetsIDPathParams = field(default=None)
    

@dataclass
class DeleteFormFieldSetsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
