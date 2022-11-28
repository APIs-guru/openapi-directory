from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class EventInfoMap:
    r"""EventInfoMap
    Describes event information.
    """
    
    event_categories: Optional[List[str]] = field(default=None)
    event_description: Optional[str] = field(default=None)
    event_id: Optional[str] = field(default=None)
    severity: Optional[str] = field(default=None)
    
