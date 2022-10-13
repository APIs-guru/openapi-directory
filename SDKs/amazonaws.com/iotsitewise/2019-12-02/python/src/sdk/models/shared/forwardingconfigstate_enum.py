from dataclasses import dataclass, field
from typing import Enum

class ForwardingConfigStateEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"

