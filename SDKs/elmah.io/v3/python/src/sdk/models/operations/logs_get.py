from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LogsGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LogsGetRequest:
    path_params: LogsGetPathParams = field()
    

@dataclass
class LogsGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    log: Optional[shared.Log] = field(default=None)
    
