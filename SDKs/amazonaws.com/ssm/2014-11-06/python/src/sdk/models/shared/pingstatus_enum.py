from dataclasses import dataclass, field
from enum import Enum

class PingStatusEnum(str, Enum):
    ONLINE = "Online"
    CONNECTION_LOST = "ConnectionLost"
    INACTIVE = "Inactive"

