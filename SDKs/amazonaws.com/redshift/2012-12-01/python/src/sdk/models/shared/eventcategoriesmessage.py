from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EventCategoriesMessage:
    r"""EventCategoriesMessage
    <p/>
    """
    
    event_categories_map_list: Optional[List[EventCategoriesMap]] = field(default=None)
    
