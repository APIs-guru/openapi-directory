from dataclasses import dataclass, field



@dataclass
class MessagesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    log_id: str = field(default=None, metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesDeleteRequest:
    path_params: MessagesDeletePathParams = field(default=None)
    

@dataclass
class MessagesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
