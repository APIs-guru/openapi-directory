from dataclasses import dataclass, field
from enum import Enum

class EnvironmentAccountConnectionStatusEnum(str, Enum):
    PENDING = "PENDING"
    CONNECTED = "CONNECTED"
    REJECTED = "REJECTED"

