from dataclasses import dataclass, field
from enum import Enum

class DeviceStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    SIGNED_OUT = "SIGNED_OUT"

