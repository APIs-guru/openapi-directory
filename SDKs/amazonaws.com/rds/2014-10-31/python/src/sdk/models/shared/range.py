from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Range:
    r"""Range
    A range of integer values.
    """
    
    from_: Optional[int] = field(default=None)
    step: Optional[int] = field(default=None)
    to: Optional[int] = field(default=None)
    
