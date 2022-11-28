from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class IPRange:
    r"""IPRange
    Describes an IP range used in a security group.
    """
    
    cidrip: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
