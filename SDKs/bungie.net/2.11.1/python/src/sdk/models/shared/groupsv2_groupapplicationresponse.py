from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupsV2GroupApplicationResponse:
    resolution: Optional[int] = field(default=None)
    
