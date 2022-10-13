from dataclasses import dataclass, field
from typing import Enum

class PingStatusEnum(str, Enum):
    ONLINE = "Online"
    CONNECTION_LOST = "ConnectionLost"
    INACTIVE = "Inactive"

