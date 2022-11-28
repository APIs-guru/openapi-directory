from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AttributeDoesNotExist:
    r"""AttributeDoesNotExist
    The specified attribute does not exist.
    """
    
    box_usage: Optional[float] = field(default=None)
    
