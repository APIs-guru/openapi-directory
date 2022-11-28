from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EventCategoriesMessage:
    r"""EventCategoriesMessage
    Data returned from the <code>DescribeEventCategories</code> operation.
    """
    
    event_categories_map_list: Optional[List[EventCategoriesMap]] = field(default=None)
    
