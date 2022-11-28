from dataclasses import dataclass, field
from typing import Optional


@dataclass
class MrssGroupContent:
    duration: Optional[int] = field(default=None)
    file_size: Optional[int] = field(default=None)
    framerate: Optional[int] = field(default=None)
    height: Optional[int] = field(default=None)
    lang: Optional[str] = field(default=None)
    type: Optional[str] = field(default=None)
    url: Optional[str] = field(default=None)
    
