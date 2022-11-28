from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class EventCategoriesMap:
    r"""EventCategoriesMap
    Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.
    """
    
    event_categories: Optional[List[str]] = field(default=None)
    source_type: Optional[str] = field(default=None)
    
