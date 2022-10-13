from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MessagesFixPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    log_id: str = field(default=None, metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesFixQueryParams:
    mark_all_as_fixed: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'markAllAsFixed', 'style': 'form', 'explode': True }})
    

@dataclass
class MessagesFixRequest:
    path_params: MessagesFixPathParams = field(default=None)
    query_params: MessagesFixQueryParams = field(default=None)
    

@dataclass
class MessagesFixResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
