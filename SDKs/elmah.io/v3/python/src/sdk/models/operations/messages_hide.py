from dataclasses import dataclass, field



@dataclass
class MessagesHidePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    log_id: str = field(metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesHideRequest:
    path_params: MessagesHidePathParams = field()
    

@dataclass
class MessagesHideResponse:
    content_type: str = field()
    status_code: int = field()
    
