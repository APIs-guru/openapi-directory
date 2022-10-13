from dataclasses import dataclass, field



@dataclass
class DeleteDriverPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDriverRequest:
    path_params: DeleteDriverPathParams = field(default=None)
    

@dataclass
class DeleteDriverResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
