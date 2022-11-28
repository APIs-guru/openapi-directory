from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Tag:
    key: Optional[str] = field(default=None)
    value: Optional[str] = field(default=None)
    
