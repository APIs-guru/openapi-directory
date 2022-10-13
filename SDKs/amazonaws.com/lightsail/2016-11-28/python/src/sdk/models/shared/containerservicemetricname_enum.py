from dataclasses import dataclass, field
from typing import Enum

class ContainerServiceMetricNameEnum(str, Enum):
    CPU_UTILIZATION = "CPUUtilization"
    MEMORY_UTILIZATION = "MemoryUtilization"

