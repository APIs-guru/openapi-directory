from dataclasses import dataclass, field
from typing import Optional


@dataclass
class IgnoresIgnoreResponse:
    ignore_flags: Optional[int] = field(default=None)
    is_ignored: Optional[bool] = field(default=None)
    
