from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NumberSubmittedAttributesExceeded:
    r"""NumberSubmittedAttributesExceeded
    Too many attributes exist in a single call.
    """
    
    box_usage: Optional[float] = field(default=None)
    
