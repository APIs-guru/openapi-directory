from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DestinyDyeReference:
    channel_hash: Optional[int] = field(default=None)
    dye_hash: Optional[int] = field(default=None)
    
