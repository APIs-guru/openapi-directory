from dataclasses import dataclass, field



@dataclass
class DeleteLocationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLocationRequest:
    path_params: DeleteLocationPathParams = field(default=None)
    

@dataclass
class DeleteLocationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
