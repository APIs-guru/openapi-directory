from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyConfigImagePyramidEntry:
    factor: Optional[float] = field(default=None)
    name: Optional[str] = field(default=None)
    
