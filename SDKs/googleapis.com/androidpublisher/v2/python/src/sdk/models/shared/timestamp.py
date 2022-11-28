from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Timestamp:
    nanos: Optional[int] = field(default=None)
    seconds: Optional[str] = field(default=None)
    
