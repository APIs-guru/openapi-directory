from dataclasses import dataclass, field
from typing import Enum

class PropertyNotificationStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

