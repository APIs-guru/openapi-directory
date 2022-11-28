from dataclasses import dataclass, field
from enum import Enum

class StreamStateEnum(str, Enum):
    LIVE = "LIVE"
    OFFLINE = "OFFLINE"

