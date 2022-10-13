from dataclasses import dataclass, field
from typing import Enum

class ExpiredEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

