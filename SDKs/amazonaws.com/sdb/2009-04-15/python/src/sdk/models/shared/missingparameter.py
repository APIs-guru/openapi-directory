from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MissingParameter:
    r"""MissingParameter
    The request must contain the specified missing parameter.
    """
    
    box_usage: Optional[float] = field(default=None)
    
