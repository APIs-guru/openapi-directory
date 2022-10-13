from dataclasses import dataclass, field
from typing import Enum

class ConnectionStateEnum(str, Enum):
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"
    UNKNOWN = "UNKNOWN"

