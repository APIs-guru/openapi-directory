from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class EventCategoriesMap:
    event_categories: Optional[List[str]] = field(default=None)
    source_type: Optional[str] = field(default=None)
    
