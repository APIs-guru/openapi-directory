from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NumberItemAttributesExceeded:
    r"""NumberItemAttributesExceeded
    Too many attributes in this item.
    """
    
    box_usage: Optional[float] = field(default=None)
    
