from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityGetThreadPathParams:
    thread_id: int = field(metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityGetThreadRequest:
    path_params: ActivityGetThreadPathParams = field()
    

@dataclass
class ActivityGetThreadResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    thread: Optional[shared.Thread] = field(default=None)
    
