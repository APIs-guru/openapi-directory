from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Tag:
    r"""Tag
    A tag consisting of a name/value pair for a resource.
    """
    
    key: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
