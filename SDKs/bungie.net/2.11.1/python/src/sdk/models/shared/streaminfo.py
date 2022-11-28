from dataclasses import dataclass, field
from typing import Optional


@dataclass
class StreamInfo:
    channel_name: Optional[str] = field(default=None)
    
