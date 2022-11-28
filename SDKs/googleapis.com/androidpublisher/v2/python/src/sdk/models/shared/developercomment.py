from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DeveloperComment:
    last_modified: Optional[Timestamp] = field(default=None)
    text: Optional[str] = field(default=None)
    
