from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CommonModelsCoreSystem:
    enabled: Optional[bool] = field(default=None)
    parameters: Optional[dict[str, str]] = field(default=None)
    
