from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Bundle:
    sha1: Optional[str] = field(default=None)
    sha256: Optional[str] = field(default=None)
    version_code: Optional[int] = field(default=None)
    
