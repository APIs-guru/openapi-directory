from dataclasses import dataclass, field
from typing import Enum

class StreamStateEnum(str, Enum):
    LIVE = "LIVE"
    OFFLINE = "OFFLINE"

