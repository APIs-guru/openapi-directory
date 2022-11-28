from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReservedNodesMessage:
    r"""ReservedNodesMessage
    <p/>
    """
    
    marker: Optional[str] = field(default=None)
    reserved_nodes: Optional[List[ReservedNode]] = field(default=None)
    
