from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ConfigGroupTheme:
    description: Optional[str] = field(default=None)
    folder: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    
