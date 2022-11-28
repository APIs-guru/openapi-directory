from dataclasses import dataclass, field
from enum import Enum

class ContainerLevelMetricsEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

