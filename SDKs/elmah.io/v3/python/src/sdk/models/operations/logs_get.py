from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogsGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsGetRequest:
    path_params: LogsGetPathParams = field(default=None)
    

@dataclass
class LogsGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    log: Optional[shared.Log] = field(default=None)
    status_code: int = field(default=None)
    
