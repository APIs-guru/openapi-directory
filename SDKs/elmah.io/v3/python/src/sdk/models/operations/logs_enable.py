from dataclasses import dataclass, field



@dataclass
class LogsEnablePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsEnableRequest:
    path_params: LogsEnablePathParams = field()
    

@dataclass
class LogsEnableResponse:
    content_type: str = field()
    status_code: int = field()
    
