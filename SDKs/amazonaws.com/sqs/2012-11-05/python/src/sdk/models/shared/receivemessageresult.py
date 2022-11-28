from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReceiveMessageResult:
    r"""ReceiveMessageResult
    A list of received messages.
    """
    
    messages: Optional[List[Message]] = field(default=None)
    
