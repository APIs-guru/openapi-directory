from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Image:
    id: Optional[str] = field(default=None)
    sha1: Optional[str] = field(default=None)
    sha256: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    
