from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class ModifyCertificatesResult:
    certificate: Optional[Certificate] = field(default=None)
    
