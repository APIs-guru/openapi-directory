from dataclasses import dataclass, field
from typing import Enum

class ContainerLevelMetricsEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

