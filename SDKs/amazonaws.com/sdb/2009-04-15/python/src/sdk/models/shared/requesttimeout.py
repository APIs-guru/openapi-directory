from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RequestTimeout:
    r"""RequestTimeout
    A timeout occurred when attempting to query the specified domain with specified query expression.
    """
    
    box_usage: Optional[float] = field(default=None)
    
