from dataclasses import dataclass, field
from enum import Enum

class ChannelLatencyModeEnum(str, Enum):
    NORMAL = "NORMAL"
    LOW = "LOW"

