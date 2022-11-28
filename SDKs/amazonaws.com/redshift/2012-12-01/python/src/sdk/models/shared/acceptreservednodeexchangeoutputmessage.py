from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AcceptReservedNodeExchangeOutputMessage:
    exchanged_reserved_node: Optional[ReservedNode] = field(default=None)
    
