from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EventCategoriesMap:
    r"""EventCategoriesMap
    Describes event categories.
    """
    
    events: Optional[List[EventInfoMap]] = field(default=None)
    source_type: Optional[str] = field(default=None)
    
