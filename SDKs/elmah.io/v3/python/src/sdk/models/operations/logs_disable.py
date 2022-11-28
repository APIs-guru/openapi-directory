from dataclasses import dataclass, field



@dataclass
class LogsDisablePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsDisableRequest:
    path_params: LogsDisablePathParams = field()
    

@dataclass
class LogsDisableResponse:
    content_type: str = field()
    status_code: int = field()
    
