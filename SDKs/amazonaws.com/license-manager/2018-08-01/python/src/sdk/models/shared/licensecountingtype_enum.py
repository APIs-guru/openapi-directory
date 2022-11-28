from dataclasses import dataclass, field
from enum import Enum

class LicenseCountingTypeEnum(str, Enum):
    V_CPU = "vCPU"
    INSTANCE = "Instance"
    CORE = "Core"
    SOCKET = "Socket"

