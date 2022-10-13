from dataclasses import dataclass, field
from typing import Enum

class EnvironmentAccountConnectionStatusEnum(str, Enum):
    PENDING = "PENDING"
    CONNECTED = "CONNECTED"
    REJECTED = "REJECTED"

