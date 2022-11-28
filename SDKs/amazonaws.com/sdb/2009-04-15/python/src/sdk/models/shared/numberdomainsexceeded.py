from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NumberDomainsExceeded:
    r"""NumberDomainsExceeded
    Too many domains exist per this account.
    """
    
    box_usage: Optional[float] = field(default=None)
    
