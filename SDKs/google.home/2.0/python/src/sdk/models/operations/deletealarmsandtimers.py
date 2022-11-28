from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteAlarmsandTimersRequest:
    request: shared.DeleteAlarmsandTimersRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteAlarmsandTimersResponse:
    content_type: str = field()
    status_code: int = field()
    example19: Optional[shared.Example19] = field(default=None)
    
