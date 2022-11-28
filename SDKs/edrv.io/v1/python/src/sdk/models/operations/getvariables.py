from dataclasses import dataclass, field



@dataclass
class GetVariablesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVariablesRequest:
    path_params: GetVariablesPathParams = field()
    

@dataclass
class GetVariablesResponse:
    content_type: str = field()
    status_code: int = field()
    
