from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Endpoint:
    address: Optional[str] = field(default=None)
    port: Optional[int] = field(default=None)
    
