from dataclasses import dataclass, field
from typing import Enum

class ReconnectEnumEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

