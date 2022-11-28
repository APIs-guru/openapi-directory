from dataclasses import dataclass, field
from enum import Enum

class ReconnectEnumEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

