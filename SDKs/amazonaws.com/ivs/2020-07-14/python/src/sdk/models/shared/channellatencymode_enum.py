from dataclasses import dataclass, field
from typing import Enum

class ChannelLatencyModeEnum(str, Enum):
    NORMAL = "NORMAL"
    LOW = "LOW"

