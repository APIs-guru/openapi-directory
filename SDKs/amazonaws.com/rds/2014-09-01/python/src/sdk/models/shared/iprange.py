from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IPRange:
    cidrip: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
