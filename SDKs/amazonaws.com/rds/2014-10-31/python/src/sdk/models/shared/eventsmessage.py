from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EventsMessage:
    r"""EventsMessage
     Contains the result of a successful invocation of the <code>DescribeEvents</code> action. 
    """
    
    events: Optional[List[Event]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
