from dataclasses import dataclass, field



@dataclass
class DeleteDriverPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDriverRequest:
    path_params: DeleteDriverPathParams = field()
    

@dataclass
class DeleteDriverResponse:
    content_type: str = field()
    status_code: int = field()
    
