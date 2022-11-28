from dataclasses import dataclass, field
from enum import Enum

class PropertyNotificationStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

