from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class TaggedResource:
    r"""TaggedResource
    A tag and its associated resource.
    """
    
    resource_name: Optional[str] = field(default=None)
    resource_type: Optional[str] = field(default=None)
    tag: Optional[Tag] = field(default=None)
    
