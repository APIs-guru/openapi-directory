from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DoubleRange:
    r"""DoubleRange
    A range of double values.
    """
    
    from_: Optional[float] = field(default=None)
    to: Optional[float] = field(default=None)
    
