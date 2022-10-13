from dataclasses import dataclass, field
from typing import Enum

class LicenseCountingTypeEnum(str, Enum):
    V_CPU = "vCPU"
    INSTANCE = "Instance"
    CORE = "Core"
    SOCKET = "Socket"

