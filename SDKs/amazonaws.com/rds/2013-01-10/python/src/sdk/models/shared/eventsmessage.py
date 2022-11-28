from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EventsMessage:
    events: Optional[List[Event]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
