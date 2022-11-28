from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DoNotDisturbHeaders:
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class DoNotDisturbRequest:
    headers: DoNotDisturbHeaders = field()
    

@dataclass
class DoNotDisturbResponse:
    content_type: str = field()
    status_code: int = field()
    getcurrentstate: Optional[shared.Getcurrentstate] = field(default=None)
    
