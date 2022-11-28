from dataclasses import dataclass, field
from typing import Optional


@dataclass
class InvalidNextToken:
    r"""InvalidNextToken
    The specified NextToken is not valid. 
    """
    
    box_usage: Optional[float] = field(default=None)
    
