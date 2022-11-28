from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListDaemonTimerScriptsResponse:
    content_type: str = field()
    status_code: int = field()
    timer_scripts: Optional[List[shared.TimerScript]] = field(default=None)
    
