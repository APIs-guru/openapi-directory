from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DoNotDisturbHeaders:
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class DoNotDisturbRequest:
    headers: DoNotDisturbHeaders = field(default=None)
    

@dataclass
class DoNotDisturbResponse:
    content_type: str = field(default=None)
    getcurrentstate: Optional[shared.Getcurrentstate] = field(default=None)
    status_code: int = field(default=None)
    
