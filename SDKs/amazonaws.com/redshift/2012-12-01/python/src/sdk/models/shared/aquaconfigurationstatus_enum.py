from dataclasses import dataclass, field
from enum import Enum

class AquaConfigurationStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    AUTO = "auto"

