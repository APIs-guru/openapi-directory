from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityMarkThreadAsReadPathParams:
    thread_id: int = field(metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityMarkThreadAsReadRequest:
    path_params: ActivityMarkThreadAsReadPathParams = field()
    

@dataclass
class ActivityMarkThreadAsReadResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
