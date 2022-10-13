from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActivityMarkThreadAsReadPathParams:
    thread_id: int = field(default=None, metadata={'path_param': { 'field_name': 'thread_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActivityMarkThreadAsReadRequest:
    path_params: ActivityMarkThreadAsReadPathParams = field(default=None)
    

@dataclass
class ActivityMarkThreadAsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
