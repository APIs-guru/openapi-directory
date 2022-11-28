from dataclasses import dataclass, field
from enum import Enum

class ExpiredEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

