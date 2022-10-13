from dataclasses import dataclass, field
from typing import Enum

class HandshakeStateEnum(str, Enum):
    REQUESTED = "REQUESTED"
    OPEN = "OPEN"
    CANCELED = "CANCELED"
    ACCEPTED = "ACCEPTED"
    DECLINED = "DECLINED"
    EXPIRED = "EXPIRED"

