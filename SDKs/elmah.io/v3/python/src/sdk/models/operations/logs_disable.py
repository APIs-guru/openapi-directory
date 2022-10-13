from dataclasses import dataclass, field



@dataclass
class LogsDisablePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsDisableRequest:
    path_params: LogsDisablePathParams = field(default=None)
    

@dataclass
class LogsDisableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
