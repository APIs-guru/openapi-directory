from dataclasses import dataclass, field
from typing import Enum

class DeviceStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    SIGNED_OUT = "SIGNED_OUT"

