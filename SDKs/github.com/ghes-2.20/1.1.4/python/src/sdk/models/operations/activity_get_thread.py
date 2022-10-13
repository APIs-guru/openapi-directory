from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityGetThreadPathParams:
    thread_id: int = field(default=None, metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityGetThreadRequest:
    path_params: ActivityGetThreadPathParams = field(default=None)
    

@dataclass
class ActivityGetThreadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    thread: Optional[shared.Thread] = field(default=None)
    
