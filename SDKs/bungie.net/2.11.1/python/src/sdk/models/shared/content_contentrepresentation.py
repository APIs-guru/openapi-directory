from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentContentRepresentation:
    name: Optional[str] = field(default=None)
    path: Optional[str] = field(default=None)
    validation_string: Optional[str] = field(default=None)
    
