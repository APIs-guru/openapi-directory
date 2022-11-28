from dataclasses import dataclass, field
from typing import Optional


@dataclass
class TooManyRequestedAttributes:
    r"""TooManyRequestedAttributes
    Too many attributes requested.
    """
    
    box_usage: Optional[float] = field(default=None)
    
