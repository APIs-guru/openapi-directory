from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NoSuchDomain:
    r"""NoSuchDomain
    The specified domain does not exist.
    """
    
    box_usage: Optional[float] = field(default=None)
    
