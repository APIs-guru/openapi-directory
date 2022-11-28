from dataclasses import dataclass, field
from enum import Enum

class ConnectionStatusEnum(str, Enum):
    CONNECTED = "Connected"
    NOT_CONNECTED = "NotConnected"

