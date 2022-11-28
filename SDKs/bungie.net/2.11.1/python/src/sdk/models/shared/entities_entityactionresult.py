from dataclasses import dataclass, field
from typing import Optional


@dataclass
class EntitiesEntityActionResult:
    entity_id: Optional[int] = field(default=None)
    result: Optional[int] = field(default=None)
    
